import { IonBackButton, IonButton, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonToolbar } from "@ionic/react";
import './Search.css';

const Search: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="searchBar">
                    <IonRow>
                        <IonCol size="9">
                            <IonSearchbar></IonSearchbar>
                        </IonCol>
                        <IonCol size="3">
                            <IonBackButton className="cancel" defaultHref="home" text="Cancel" icon=""/>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonSegment>
                    <IonSegmentButton>All</IonSegmentButton>
                    <IonSegmentButton>Joule App</IonSegmentButton>
                    <IonSegmentButton>ChefSteps.com</IonSegmentButton>
                </IonSegment>

                <div className="visual">
                    Visual Doneness Guides
                </div>

                <IonCard>
                    <IonRow>
                        <IonCol>
                            <img className="columnImage" src="assets/resources/burgir.jpg" />
                        </IonCol>
                        <IonCol>
                            <h5>Burger</h5>
                        </IonCol>
                    </IonRow>
                        <IonRow>
                        <IonCol>
                            <img className="columnImage" src="assets/resources/salmon.jpg" />
                        </IonCol>
                        <IonCol>
                            <h5>Salmon</h5>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <img className="columnImage" src="assets/resources/venison.jpg" />
                        </IonCol>
                        <IonCol>
                            <h5>Venison</h5>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <img className="columnImage" src="assets/resources/juice.jpg" />
                        </IonCol>
                        <IonCol>
                            <h5>Juices</h5>
                        </IonCol>
                    </IonRow>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Search;