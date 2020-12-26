import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonItem,
  IonButtons,
  IonBackButton,
  IonAlert,
} from '@ionic/react';
import { save, text } from 'ionicons/icons';

import React, { useState } from 'react';

const NewItem: React.FC = () => {
  const [taskName, setTaskName] = useState<string>();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/home' />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>New Item</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>Task Name</IonLabel>
            <IonInput
              value={taskName}
              placeholder='Enter Input'
              onIonChange={(e) => setTaskName(e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
        <IonButton
          onClick={() => {
            // alert(`Task Name is ${taskName}`)
            setShowAlert(true);
          }}>
          <IonIcon slot='start' icon={save} />
          <IonLabel>Save</IonLabel>
        </IonButton>
      </IonContent>
      <IonAlert
        onDidDismiss={() => setShowAlert(false)}
        isOpen={showAlert}
        header={'Hello World'}
        subHeader={'Hello COVID-19'}
        message={`Task Name is ${taskName}`}
        buttons={['OK']}></IonAlert>
    </IonPage>
  );
};

export default NewItem;
