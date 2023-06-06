import { IonButton } from '@ionic/react'

import { url } from '../../config'

export const Header = () => {
	return (
		<div className={'col-2 flex-auto '}>
			<img src={url} className={'h-56 object-cover'} />
			<div className={'absolute col-2 p-4 h-56 w-full  justify-end'}>
				<div className={'text-2xl'}> У нас какая то инфа для вас </div>
				<div className={'row-2'}>
					<IonButton fill={'outline'}>Скрыть</IonButton>
					<IonButton color={'light'}>Узнать больше</IonButton>
				</div>
			</div>
		</div>
	)
}
