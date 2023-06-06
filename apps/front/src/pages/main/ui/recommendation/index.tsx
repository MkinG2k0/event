import { IonButton, IonIcon } from '@ionic/react'
import { bookmarkOutline } from 'ionicons/icons'
import { Map } from 'react-easy-map'

import { Logo } from '~/shared/ui/logo'

export const Recommendation = () => {
	return (
		<div className={'col-2'}>
			<div className={'text-xl'}>Рекомендации для вас </div>
			<div className={'row-4 overflow-auto pb-2'}>
				<Map data={arr} item={RecItem} />
			</div>
		</div>
	)
}

const RecItem = ({ logoUrl, title, description, about }) => {
	return (
		<div className={'col-2 w-56 p-3 bg-block-medium rounded-lg'}>
			<div className={'row-4'}>
				<Logo src={logoUrl} />
				<div className={'col'}>
					<div className={'text-gray-400'}> {description} </div>
					<div className={''}> {title} </div>
				</div>
			</div>
			<div className={'h-18 overflow-hidden flex-auto'}> {about} </div>
			<div className={'row-2 '}>
				<IonButton fill={'outline'} className={'flex-auto '}>
					Просмотреть
				</IonButton>
				<IonIcon icon={bookmarkOutline} className={'p-2 bg-block-light rounded-lg h-5 w-5'} />
			</div>
		</div>
	)
}

const arr = [
	{
		logoUrl:
			'https://fikiwiki.com/uploads/posts/2022-02/1645039715_7-fikiwiki-com-p-kartinki-logotipov-7.jpg',
		title: 'Fanta',
		description: 'soo pick',
		about: 'abount fanta , abount fanta, abount fanta ,abount fanta',
	},
	{
		logoUrl:
			'https://fikiwiki.com/uploads/posts/2022-02/1645039715_7-fikiwiki-com-p-kartinki-logotipov-7.jpg',
		title: 'Fanta',
		description: 'soo pick',
		about: 'abount fanta',
	},
	{
		logoUrl:
			'https://fikiwiki.com/uploads/posts/2022-02/1645039715_7-fikiwiki-com-p-kartinki-logotipov-7.jpg',
		title: 'Fanta',
		description: 'soo pick',
		about: 'abount fanta',
	},
	{
		logoUrl:
			'https://fikiwiki.com/uploads/posts/2022-02/1645039715_7-fikiwiki-com-p-kartinki-logotipov-7.jpg',
		title: 'Fanta',
		description: 'soo pick',
		about: 'abount fanta',
	},
	{
		logoUrl:
			'https://fikiwiki.com/uploads/posts/2022-02/1645039715_7-fikiwiki-com-p-kartinki-logotipov-7.jpg',
		title: 'Fanta',
		description: 'soo pick',
		about: 'abount fanta',
	},
]
