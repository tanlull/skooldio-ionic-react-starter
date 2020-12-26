import {
  CameraPhoto,
  CameraResultType,
  CameraSource,
  Capacitor,
  FilesystemDirectory,
} from '@capacitor/core';
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

export interface Photo {
  filePath: string;
  webviewPath: string | undefined;
}

const STORAGE_KEY = 'ioni-photos';

const useGallery = () => {
  const { getPhoto } = useCamera();

  const [photos, setPhotos] = useState<Photo[]>([]);

  const { readFile, writeFile, getUri } = useFilesystem();

  const { get, set } = useStorage();

  useEffect(() => {
    const loadPhotos = async () => {
      const photosString = await get(STORAGE_KEY);
      const photos = photosString ? JSON.parse(photosString) : [];

      for (const photo of photos) {
        const file = await readFile({ path: photo.filePath, directory: FilesystemDirectory.Data });
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }

      setPhotos(photos);
    };
    loadPhotos();
  }, []);

  const takePhoto = async () => {
    const cameraPhoto: CameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    const fileName = new Date().getTime() + '.jpeg';

    const newPhoto = await savePhoto(cameraPhoto, fileName);

    setPhotos([newPhoto, ...photos]);
    await set(STORAGE_KEY, JSON.stringify([newPhoto, ...photos]));
  };

  const savePhoto = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
    let base64Data: string;
    if (isPlatform('hybrid')) {
      const file = await readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }
    const saveFile = await writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data,
    });
    if (isPlatform('hybrid')) {
      return {
        filePath: saveFile.uri,
        webviewPath: Capacitor.convertFileSrc(saveFile.uri),
      };
    } else {
      return {
        filePath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  const deletePhoto = () => {
    alert('deleting photo');
  };

  return { takePhoto, deletePhoto, photos };
};

export default useGallery;
