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
  useIonViewWillEnter,
  useIonViewDidEnter,
  useIonViewWillLeave,
  useIonViewDidLeave,
  IonActionSheet,
} from '@ionic/react';
import { errorMonitor } from 'events';
import { add, trash, copy } from 'ionicons/icons';

import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import Todo from '../components/Todo';

const todos = [
  { id: 1, name: 'Go To Work', deadline: 5 },
  { id: 2, name: 'Buy a Skooldio Course', deadline: 2 },
  { id: 3, name: 'Finish a Skooldio Course', deadline: 1 },
];

const Todolist: React.FC<RouteComponentProps> = (props) => {
  useIonViewWillEnter(() => {
    console.log('IonViewWillEnter event fired');
  });
  useIonViewDidEnter(() => {
    console.log('IonViewDidEnter event fired');
  });
  useIonViewWillLeave(() => {
    console.log('IonViewWillLeave event fired');
  });
  useIonViewDidLeave(() => {
    console.log('IonViewDidLeave event fired');
  });

  const [selectedId, setSelectedId] = useState<number>();
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todolist of Natthanun</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Todolist of Natthanun 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {todos.map((todo) => {
            return (
              <Todo
                {...todo}
                onClickTask={() => {
                  setSelectedId(todo.id);
                  setShowActionSheet(true);
                }}
              />
            );
          })}
        </IonList>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => {
            setShowActionSheet(false);
          }}
          buttons={[
            {
              icon: copy,
              text: 'Duplicate',
              handler: () => alert(`Duplicate task id ${selectedId} finish`),
            },
            {
              icon: trash,
              role: 'destructive',
              text: 'Delete',
              handler: () => alert(`Delete task id ${selectedId} finish`),
            },
          ]}></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;
