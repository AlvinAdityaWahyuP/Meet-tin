import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonMenuButton, IonButton, IonIcon, IonDatetime, IonSelectOption, IonList, IonItem, IonLabel, IonSelect, IonPopover, IonText } from '@ionic/react';
import './About.scss';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import AboutPopover from '../components/AboutPopover';
import { format, parseISO } from 'date-fns';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {

  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState<MouseEvent>();
  const [location, setLocation] = useState<'jakarta' | 'bandung' | 'palembang' | 'makassar'>('jakarta');
  const [conferenceDate, setConferenceDate] = useState('2021-11-29T00:00:00-05:00');

  const selectOptions = {
    header: 'Select a Location'
  };

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  function displayDate(date: string, dateFormat: string) {
    return format(parseISO(date), dateFormat);
  }

  return (
    <IonPage id="about-page">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="about-header">
          <div className="about-image jakarta" style={{'opacity': location === 'jakarta' ? '1' : undefined}}></div>
          <div className="about-image bandung" style={{'opacity': location === 'bandung' ? '1' : undefined}}></div>
          <div className="about-image palembang" style={{'opacity': location === 'palembang' ? '1' : undefined}}></div>
          <div className="about-image makassar" style={{'opacity': location === 'makassar' ? '1' : undefined}}></div>
        </div>
        <div className="about-info">
          <h3 className="ion-padding-top ion-padding-start">About</h3>

          <p className="ion-padding-start ion-padding-end">
            Event Seminar yang diadakan {displayDate(conferenceDate, 'MMM dd, yyyy') } menjelaskan bagaimana cara menggunakan ionic dengan baik dan tepat serta akan diajarkan dengan pemateri yang profesional. 
          </p>  

          <h3 className="ion-padding-top ion-padding-start">Details</h3>

          <IonList lines="none">

          {/* BUTTON LOCATION */}
            <IonItem>
              <IonLabel>
                Location
              </IonLabel>
              <IonSelect value={location} interfaceOptions={selectOptions} onIonChange={(e) => setLocation(e.detail.value as any)}>
                <IonSelectOption value="jakarta">Jakarta</IonSelectOption>
                <IonSelectOption value="bandung">Bandung</IonSelectOption>
                <IonSelectOption value="palembang">Palembang</IonSelectOption>
                <IonSelectOption value="makassar">Makassar</IonSelectOption>
              </IonSelect>
            </IonItem>

            {/* BUTTON DATE INPUT */}
            <IonItem button={true} id="open-date-input">
              <IonLabel>
                Date
              </IonLabel>
              <IonText slot="end">{displayDate(conferenceDate, 'MMM dd, yyyy')}</IonText>
              <IonPopover id="date-input-popover" trigger="open-date-input" showBackdrop={false} side="top" alignment="end">
                <IonDatetime
                  max="2056"
                  value={conferenceDate}
                  onIonChange={(e) => setConferenceDate(e.detail.value!)}
                  presentation="date">
                </IonDatetime>
              </IonPopover>
            </IonItem>
          </IonList>

          <h3 className="ion-padding-top ion-padding-start">Internet</h3>

          <IonList lines="none">
            <IonItem>
              <IonLabel>
                Wifi network
              </IonLabel>
              <IonLabel className="ion-text-end">
                gtlo-{ displayDate(conferenceDate, 'y') }
              </IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel>
               Password
              </IonLabel>
              <IonLabel className="ion-text-end">
                makegoodthings
              </IonLabel>
            </IonItem>
          </IonList>

        </div>
      </IonContent>

      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(About);