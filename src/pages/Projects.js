import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonSlides,
  IonSlide,
} from '@ionic/react';
import { add } from 'ionicons/icons';

import React from 'react';

import Todo from '../components/Todo';

const projectLists = [
  { id: 1, name: 'Skooldio' },
  { id: 2, name: 'Ionic' },
  { id: 3, name: 'Start Up' },
];

const SkooldioCard = ({ project, text }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonImg src={'https://assets.skooldio.com/courses/Intermediate+CSS/essential-css.png'} />
        <IonCardTitle>{project.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{text}</IonCardContent>
    </IonCard>
  );
};

const Projects = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Project List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Project List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSlides>
          {projectLists.map((project) => {
            return (
              <IonSlide>
                <SkooldioCard project={project} text={'test'}></SkooldioCard>
              </IonSlide>
            );
          })}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
