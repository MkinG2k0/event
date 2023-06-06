import { IonInput, IonItem, IonTitle } from '@ionic/react'
import { FC } from 'react'

import { NavBtn } from 'shared'
import { eventInfoRoute, eventsRoute } from '~/shared/config/routing'

interface authProps {}

const Auth: FC<authProps> = ({}) => {
	return (
		<div className={'col-2 flex-auto justify-center items-center h-full'}>
			<div className={'col-2 justify-center items-center w-80'}>
				<IonTitle className={'text-center'}>Auth</IonTitle>
				<IonItem className={'w-full'}>
					<IonInput placeholder={'Enter login'}></IonInput>
				</IonItem>
				<IonItem className={'w-full'}>
					<IonInput placeholder={'Enter password'} type={'password'}></IonInput>
				</IonItem>
				<div className={'row-2  w-full'}>
					<NavBtn className={'flex-auto'} classNameBtn={'w-full'} to={eventsRoute} fill={'outline'}>
						Register
					</NavBtn>
					<NavBtn className={'flex-auto'} classNameBtn={'w-full'} to={eventsRoute}>
						Login
					</NavBtn>
				</div>
			</div>
		</div>
	)
}

export default Auth
