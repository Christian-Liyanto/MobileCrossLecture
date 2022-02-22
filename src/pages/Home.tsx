import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { search } from 'ionicons/icons';
import { NavButtons } from '../components/NavButton';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons color="dark">
            <NavButtons />
          </IonButtons>
          <IonButton slot="end" color="light">
            <IonBackButton className="search" defaultHref="search" text="Search" icon={search}/>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonCard>
            <img className="image" src="assets/resources/blt.png" />
            <div className="myOverlay" >
              <div className="gradient">
                <div>Get your Joule. Be</div>
                <div>happy.</div>
                <div className="explore">Explore</div>
              </div>
            </div>
          </IonCard>
          <div className="appBg">
            <IonRow className="RowType">
              <p>
                  <span>Search by Type</span>
              </p>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Beef.jpg" />
                  Beef
                </div>
              </IonCol>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Seafood.png" />
                  Seafood
                </div>
              </IonCol>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Poultry.png" />
                  Poultry
                </div>
              </IonCol>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Pork.jpg" />
                  Pork
                </div>
              </IonCol>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Lamb.jpg" />
                  Lamb
                </div>
              </IonCol>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Game.jpg" />
                  Game
                </div>
              </IonCol>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Vegetables.jpg" />
                  Vegetables
                </div>
              </IonCol>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Dessert.jpg" />
                  Dessert
                </div>
              </IonCol>
              <IonCol size="4">
                <div className="bgWhite">
                  <img className="image" src="assets/resources/Other.jpg" />
                  Other
                </div>
              </IonCol>

              <p>
                <span>Cooking Guides</span>
              </p>
              <IonCard>
                <IonRow>
                  <IonCol>
                    <img className="columnImage" src="assets/resources/burgir.jpg" />
                  </IonCol>
                  <IonCol>
                    <h5>Get Started : Basic Guide</h5>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <img className="columnImage" src="assets/resources/salmon.jpg" />
                  </IonCol>
                  <IonCol>
                    <h5>Quick & Easy</h5>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <img className="columnImage" src="assets/resources/venison.jpg" />
                  </IonCol>
                  <IonCol>
                    <h5>Cook in a Jar-No Bag Required!</h5>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <img className="columnImage" src="assets/resources/juice.jpg" />
                  </IonCol>
                  <IonCol>
                    <h5>All the Guides</h5>
                  </IonCol>
                </IonRow>
              </IonCard>
            </IonRow>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
