import React from 'react';
import {
    IonCardSubtitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSlide,
    IonSlides,
    IonImg,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonCardTitle
} from "@ionic/react";

const projectlist = [
    { name: "House #1", desc: "Counrty House Counrty House Counrty House", subtitle: "Counrty", image: "https://github.com/tanlull/test_db/raw/master/images/house1.png" },
    { name: "House #2", desc: "Mobile House Mobile House Mobile House", subtitle: "Mobile", image: "https://github.com/tanlull/test_db/raw/master/images/house2.png" },
    { name: "House #3", desc: "Modern House Modern House Modern House", subtitle: "Modern", image: "https://github.com/tanlull/test_db/raw/master/images/house3.png" }
];

const Projects = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>House Project Z</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Projects</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonSlides options={{ freeMode: false }}>
                    {projectlist.map((project, idx) => {
                        return (
                            < IonSlide key={idx}>
                                <IonCard>
                                    <IonImg src={project.image} />
                                    <IonCardHeader>
                                        <IonCardSubtitle>{project.subtitle}</IonCardSubtitle>
                                        <IonCardTitle>{project.name}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>{project.desc}</IonCardContent>
                                </IonCard>
                            </IonSlide>
                        )
                    })}
                </IonSlides>
            </IonContent>
        </IonPage >
    );
};

export default Projects;