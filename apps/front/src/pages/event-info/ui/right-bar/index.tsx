import { IonIcon } from '@ionic/react'
import style from './style.module.scss'
import { FC } from 'react'
import {
	bagCheckOutline,
	checkbox,
	checkboxOutline,
	checkmarkCircleOutline,
	shieldCheckmarkOutline,
} from 'ionicons/icons'

interface RightBarProps {}

export const RightBar: FC<RightBarProps> = ({}) => {
	return (
		<div className="row sm:w-80 border-divider-dark  sm:border-r-2 sm:flex-col w-full">
			<div className={'col-2 flex-auto border-r-2 sm:border-0 border-divider-dark p-5 pb-0'}>
				<div className={'row-2 mb-2 items-center'}>
					<IonIcon icon={checkbox} className={'text-blue-500 text-2xl '} />
					<span>Информация</span>
				</div>
				{info.map(({ subTitle, title }) => (
					<div className={'row-4'} key={title}>
						<div
							className={'bg-block-medium w-14 h-14 flex justify-center items-center rounded-lg'}
						>
							<IonIcon icon={checkmarkCircleOutline} className={'text-green-500 text-4xl '} />
						</div>
						<div className={'col justify-center'}>
							<div className={'text-medium'}> {subTitle}</div>
							<div className={''}> {title}</div>
						</div>
					</div>
				))}
			</div>
			<div className={'col-2 flex-auto p-5'}>
				<div className={'row-2 mb-2 items-center'}>
					<IonIcon icon={bagCheckOutline} className={'text-medium text-2xl '} />
					<span>Спонсоры</span>
				</div>
				{info.map(({ subTitle, title, count }) => (
					<div
						className={'flex gap-4 bg-block-medium flex items-center rounded-lg p-2 '}
						key={title}
					>
						<div className={'row-2 items-center flex-auto'}>
							<IonIcon icon={shieldCheckmarkOutline} className={'text-green-500 text-4xl '} />
							<div className={'col '}>
								<div className={'text-medium'}> {subTitle}</div>
								<div className={''}> {title}</div>
							</div>
						</div>
						<div className={'bg-green-600 bg-opacity-20 p-2 rounded-lg'}>{count}</div>
					</div>
				))}
			</div>
		</div>
	)
}

const info = [
	{ title: 'Math', subTitle: 'i32', count: 1000 },
	{ title: 'Math 1', subTitle: 'i32', count: 1500 },
	{ title: 'Math 2', subTitle: 'i32', count: 2300 },
]
