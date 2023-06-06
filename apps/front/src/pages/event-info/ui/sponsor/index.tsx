import { IonIcon } from '@ionic/react'
import { bagCheckOutline } from 'ionicons/icons'
import { Map } from 'react-easy-map'

import { info, logo } from '../../config'

export const Sponsors = () => {
	return (
		<div className={'col-2 flex-auto px-5 '}>
			<div className={'row-2 mb-2 items-center'}>
				<IonIcon icon={bagCheckOutline} className={'text-medium text-2xl '} />
				<span>Спонсоры</span>
			</div>
			<Map data={info} item={ItemSponsor} keyName={'title'} />
		</div>
	)
}
const ItemSponsor = ({ title, subTitle, count }) => {
	return (
		<div className={'flex gap-4 bg-block-medium items-center rounded-lg p-2 '} key={title}>
			<div className={'row-4 items-center flex-auto'}>
				<img src={logo} className={'w-14 h-14 object-cover rounded-md'} />
				<div className={'col '}>
					<div className={'text-medium'}> {subTitle}</div>
					<div className={''}> {title}</div>
				</div>
			</div>
			<div className={'text-[var(--color-price)] bg-[var(--color-bg-price)] p-2 rounded-lg'}>
				{count}
			</div>
		</div>
	)
}
