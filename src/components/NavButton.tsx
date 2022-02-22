import { IonButton, IonMenuButton } from '@ionic/react';
import React, { useEffect } from 'react';

export const NavButtons = () => {
	const [mQuery, setMQuery] = React.useState<any>({
		matches: window.innerWidth > 768 ? true : false,
	});

	useEffect(() => {
		let mediaQuery = window.matchMedia('(min-width: 0px)');
		mediaQuery.addListener(setMQuery);

		return () => mediaQuery.removeListener(setMQuery);
	}, []);

	console.log(mQuery.matches);

	return (
		<div>
			{mQuery && !mQuery.matches ? (
				<IonMenuButton />
			) : (
				<>
					<IonButton routerLink={'/home'}>Home </IonButton>
					<IonButton routerLink={'/home'}>Tips & Trick </IonButton>
					<IonButton routerLink={'/home'}>Help & Support</IonButton>
					<IonButton routerLink={'/home'}>Settings</IonButton>
				</>
			)}
		</div>
	);
};
