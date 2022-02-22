import {IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonMenuToggle,IonItem,IonLabel,IonIcon,} from '@ionic/react';
import {homeOutline,homeSharp,helpCircleOutline,helpCircleSharp,settingsOutline,settingsSharp,discOutline,discSharp,} from 'ionicons/icons';
import './Menu.css';

export const Menu = () => {
	return (
		<IonMenu side='start' contentId='main'>
			<IonContent>
				<IonList>
					<IonMenuToggle auto-hide='false'>
						<IonItem button routerLink={'/home'} routerDirection='none' lines='none'>
							<IonIcon ios={homeOutline} md={homeSharp} />
							<IonLabel className='home'>Home</IonLabel>
						</IonItem>
						<IonItem button routerLink={'/home'} routerDirection='none' lines='none'>
							<IonIcon ios={discOutline} md={discSharp} />
							<IonLabel className='disc'>Tips & Trick</IonLabel>
						</IonItem>
						<IonItem button routerLink={'/home'} routerDirection='none' lines='none'>
							<IonIcon ios={helpCircleOutline} md={helpCircleSharp} />
							<IonLabel className='help'>Help & Support</IonLabel>
						</IonItem>
						<IonItem button routerLink={'/home'} routerDirection='none' lines='none'>
							<IonIcon ios={settingsOutline} md={settingsSharp} />
							<IonLabel className='setting'>Settings</IonLabel>
						</IonItem>
					</IonMenuToggle>
				</IonList>
			</IonContent>
		</IonMenu>
	);
};
