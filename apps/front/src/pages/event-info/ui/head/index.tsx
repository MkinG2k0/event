import { FC } from 'react'
import { IonButton, IonChip } from '@ionic/react'
import { Button } from 'ui'

import { chips, logo, url } from '../../config'

import style from './style.module.scss'

import { EventInfo, Location, PC } from '~/shared'

interface EventHeadProps {}

export const EventHead: FC<EventHeadProps> = ({}) => {
	return (
		<div className={'col h-56 relative border-b-2 border-divider-dark'}>
			<div className={style.wrapBg}>
				<img className={style.bg} src={url} />
			</div>
			<div className={'absolute col justify-between p-4 h-56 w-full'}>
				<Location location={'Дагестан, Махачкала'} shortLocation={'Location'} />
				<div className={style.wrapChip}>
					<EventInfo src={logo} description={'Описание'} name={'Название'} />
					<div className={'row-2 justify-between'}>
						<div className={'row-2 overflow-auto  pb-2'}>
							{chips.map(({ text }) => (
								<IonChip className={style.chip} key={text}>
									{text}
								</IonChip>
							))}
						</div>
						<PC className={'row-2 h-full'}>
							<IonButton fill={'outline'}>Сохранить</IonButton>
							<IonButton>Войти</IonButton>
						</PC>
					</div>
				</div>
			</div>
		</div>
	)
}
