import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {Plugins} from '@capacitor/core';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useGetInfo } from '@ionic/react-hooks/device';
import {useCurrentPosition } from '@ionic/react-hooks/geolocation';


const {OpenMap} = Plugins;

const Home: React.FC = () => {
  const { info } = useGetInfo();
  const { currentPosition } = useCurrentPosition();


  const clickOpenMap = () => {
    const {
      coords: { longitude, latitude },
    } = currentPosition || { coords: {} };
    OpenMap.echo({
      value: `Your current location is latitude: ${latitude}, latitude: ${longitude}`,
    });
    OpenMap.open({
      longitude,
      latitude,
    });
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Sweet Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home Sweet Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel>{JSON.stringify(info)}</IonLabel>
        <IonLabel>{JSON.stringify(currentPosition)}</IonLabel>
        <p></p>
        <IonButton onClick={clickOpenMap}>Open Map</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
