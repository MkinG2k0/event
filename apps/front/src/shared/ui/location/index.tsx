import { IonIcon } from '@ionic/react'
import style from './style.module.scss'
import { FC } from 'react'
import { locationOutline } from 'ionicons/icons'

interface LocationProps {
	shortLocation: string
	location: string
}

export const Location: FC<LocationProps> = ({ location, shortLocation }) => {
	return (
		<div className="row">
			<IonIcon icon={locationOutline} className="text-blue-500 text-[2.3rem]" />
			<div className="flex flex-col text-sm">
				<span className="text-blue-500 ">{shortLocation}</span>
				<span>{location}</span>
			</div>
		</div>
	)
}
