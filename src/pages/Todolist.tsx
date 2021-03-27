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
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave
} from "@ionic/react";
import { add } from "ionicons/icons";

import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";

import Todo from "../components/Todo";

const todos = [
  { id: 1, name: "Go To Work", deadline: 5 },
  { id: 2, name: "Buy a Skooldio Course", deadline: 2 },
  { id: 3, name: "Finish a Skooldio Course", deadline: 1 },
];

const Todolist: React.FC<RouteComponentProps> = (props) => {
  // useEffect(() =>{
  //   alert('Landed on todo page')
  // },[])
  useIonViewWillEnter(()=>console.log('Ionview WILL Enter Todopage'));
  useIonViewDidEnter(()=>console.log('Ionview DID Enter Todopage'));

  useIonViewWillLeave(()=>console.log('Ionview WILL LEAVE  Todopage'));
  useIonViewDidLeave(()=>console.log('Ionview DID LEAVE Todopage'));



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todolist Tanya S.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Todolist </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {todos.map((todo) => {
            return <Todo {...todo} />;
          })}
        </IonList>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={() => props.history.push("/new")}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;
