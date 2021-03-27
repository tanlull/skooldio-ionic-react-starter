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
  useIonViewWillLeave,
  IonActionSheet
} from "@ionic/react";

import {ellipsisVerticalOutline} from 'ionicons/icons'

import { add ,trashBin,copy} from "ionicons/icons";

import React, { useEffect, useState } from "react";
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

const [showActionSheet,setShowActionSheet] = useState(false);
const [selectedId,setSelectedId] = useState(0);

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
            return (
            <Todo {...todo} onClick={()=>{
              setShowActionSheet(true)
              setSelectedId(todo.id)
             // alert('Click')
            
            }}/>
          )})}
        </IonList>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={() => props.history.push("/new")}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonActionSheet 
        isOpen={showActionSheet} 
        onDidDismiss={()=>{
          setShowActionSheet(false)
        }}
        buttons={[
          {text : 'Delete' ,
          role: 'destructive',
          icon: trashBin,
           handler:()=>{alert(`Delete Task id : ${selectedId}`)}},
          {text :'Duplicate', 
          icon: copy,
          handler:()=>{alert(`Duplicate Task id: ${selectedId}`)}}
        ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Todolist;
