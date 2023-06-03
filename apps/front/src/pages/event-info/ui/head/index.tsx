import { FC } from 'react'

import style from './style.module.scss'
import { EventInfo, Location, PC } from '~/shared'
import { IonButton, IonChip } from '@ionic/react'
import { Button } from 'ui'

interface EventHeadProps {}

export const EventHead: FC<EventHeadProps> = ({}) => {
	return (
		<div className={'col h-56 relative border-b-2 border-divider-dark'}>
			<div className={style.wrapBg}>
				<img className={style.bg} src={url} />
			</div>
			<div className={'absolute col justify-between p-4 h-56 w-full'}>
				<Location location="Дагестан, Махачкала" shortLocation="Location" />
				<div className={style.wrapChip}>
					<EventInfo src={logo} description="Описание" name="Название" />
					<div className="row-2 justify-between">
						<div className="row-2 overflow-auto  pb-2">
							{chips.map(({ text }) => (
								<IonChip className={style.chip} key={text}>
									{text}
								</IonChip>
							))}
						</div>
						<PC className="row-2 h-full">
							<IonButton fill="outline">Сохранить</IonButton>
							<IonButton>Войти</IonButton>
						</PC>
					</div>
				</div>
			</div>
		</div>
	)
}
const chips = [
	{ text: 'Full Time' },
	{ text: 'It' },
	{ text: 'New Idea 1' },
	{ text: 'New Idea 2' },
	{ text: 'New Idea 3' },
]
const url =
	'https://avatars.mds.yandex.net/i?id=9c319eed2f77f50f4d3dc89ccbb810e2ae51b9a3-9291460-images-thumbs&n=13'
const logo =
	'https://avatars.mds.yandex.net/i?id=3f0cece55735bafaa2bf8e3eba7c60971bc582f9-8497136-images-thumbs&n=13'
