import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useGetInfo } from '@ionic/react-hooks/device';

import { Plugins } from '@capacitor/core';

import './Home.css';

const { Geolocation } = Plugins;

const Home: React.FC = () => {
  const { info } = useGetInfo();

  const [location, setLocation] = useState<any>();

  useEffect(() => {
    const getLocation = async () => {
      Geolocation.watchPosition({}, (position, err) => {
        setLocation(position);
      });
    };
    getLocation();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonLabel>
            <h1>Device Info</h1>
          </IonLabel>
          <IonLabel>{JSON.stringify(info)}</IonLabel>
          <IonLabel>
            <h1>Location Info</h1>
          </IonLabel>
          <IonLabel>{JSON.stringify(location)}</IonLabel>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
