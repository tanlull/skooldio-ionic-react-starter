import React from 'react';
import { ellipsisVerticalOutline } from 'ionicons/icons';
import {
  IonItem,
  IonLabel,
  IonCheckbox,
  IonBadge,
  IonIcon,
  IonText,
  IonTextarea,
} from '@ionic/react';

type TodoProps = {
  id: number;
  name: string;
  deadline?: number;
  onClickTask: () => void;
};

const Todo: React.FC<TodoProps> = ({ id, name, deadline, onClickTask }) => (
  <IonItem>
    <IonCheckbox slot='start' />
    <IonCheckbox hidden={true} />
    <IonLabel>{name}</IonLabel>{' '}
    <IonBadge color='success' slot='end'>
      {deadline} Days
    </IonBadge>
    <IonIcon slot='end' icon={ellipsisVerticalOutline} onClick={onClickTask} />
  </IonItem>
);

export default Todo;
