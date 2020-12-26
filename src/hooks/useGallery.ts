import { CameraResultType } from '@capacitor/core';
import { useCamera } from '@ionic/react-hooks/camera';

const useGallery = () => {
  const { getPhoto } = useCamera();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
    });
    alert(cameraPhoto);
  };

  const deletePhoto = () => {
    alert('deleting photo');
  };

  return { takePhoto, deletePhoto };
};

export default useGallery;
