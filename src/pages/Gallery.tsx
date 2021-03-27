import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,    IonImg,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Gallery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
                                    <IonImg src='https://github.com/tanlull/test_db/raw/master/images/blue.jpg'/>
                                    <IonCardHeader>
                                        <IonCardSubtitle>This is a blue category</IonCardSubtitle>
                                        <IonCardTitle>Butterfly</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>Butterfly Butterfly Butterfly Butterfly</IonCardContent>
                                </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
