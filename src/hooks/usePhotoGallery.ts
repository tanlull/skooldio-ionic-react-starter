import {
  CameraPhoto,
  CameraResultType,
  CameraSource,
  Capacitor,
  FilesystemDirectory,
} from "@capacitor/core";
import { useCamera } from "@ionic/react-hooks/camera";
import { useState, useEffect } from "react";
import { base64FromPath, useFilesystem } from "@ionic/react-hooks/filesystem";
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from "@ionic/react";

const PHOTO_STORAGE = "photos";

export interface Photo {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const { getPhoto } = useCamera();
  const [photos, setPhotos] = useState<Photo[]>([]);

  const { readFile, writeFile } = useFilesystem();
	const { get, set } = useStorage();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    const fileName = new Date().getTime() + ".jpeg";
    const newPhoto = await savePhoto(cameraPhoto, fileName);
    const newPhotos = [...photos, newPhoto];
	  setPhotos(newPhotos);
		set(PHOTO_STORAGE, JSON.stringify(newPhotos));
  };


  const savePhoto = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
    if (isPlatform("hybrid")) {
			const file = await readFile({
		    path: photo.path!,
		  });
			const base64Data = file.data;
			const savedFile = await writeFile({
			  path: fileName,
			  data: base64Data,
			  directory: FilesystemDirectory.Data
			});
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
			const base64Data = await base64FromPath(photo.webPath!);
			const savedFile = await writeFile({
			  path: fileName,
			  data: base64Data,
			  directory: FilesystemDirectory.Data
			});
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
};

		useEffect(() => {
	    const loadPhotos = async () => {
	      const photosString = await get(PHOTO_STORAGE);
	      const photos = (photosString ? JSON.parse(photosString) : []) as Photo[];
	      for (const photo of photos) {
	        const file = await readFile({
	          path: photo.filepath,
	          directory: FilesystemDirectory.Data
	        });
	        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
	      }
	      setPhotos(photos);
	    };
	    loadPhotos();
	  }, [get, readFile]);

  return {
    photos,
    takePhoto,
  };
}