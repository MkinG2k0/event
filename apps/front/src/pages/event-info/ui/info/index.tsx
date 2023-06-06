import { IonIcon } from '@ionic/react'
import { checkmarkCircleOutline, chevronDownCircleOutline } from 'ionicons/icons'
import { Map } from 'react-easy-map'

import { info } from '../../config'

export const Info = () => {
	return (
		<div className={'col-2 border-r-2 sm:border-0 border-divider-dark px-5 pb-0 '}>
			<div className={'row-2 mb-2 items-center'}>
				<IonIcon icon={chevronDownCircleOutline} className={' text-2xl '} />
				<span>Информация</span>
			</div>
			<Map data={info} item={ItemInfo} keyName={'title'} />
		</div>
	)
}

export const ItemInfo = ({ title, subTitle, count }) => {
	return (
		<div className={'row-4'} key={title}>
			<div className={'bg-block-medium w-14 h-14 flex justify-center items-center rounded-lg'}>
				<IonIcon icon={checkmarkCircleOutline} className={'text-[var(--color-price)] text-4xl '} />
			</div>
			<div className={'col justify-center'}>
				<div className={'text-medium'}> {subTitle}</div>
				<div className={''}> {title}</div>
			</div>
		</div>
	)
}
