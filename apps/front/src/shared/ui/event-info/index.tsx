import style from './style.module.scss'
import { FC } from 'react'

interface EventInfoProps {
	src: string
	name: string
	description: string
}

export const EventInfo: FC<EventInfoProps> = ({ src, name, description }) => {
	return (
		<div className="flex gap-3">
			<img src={src} className={'w-14 h-14 object-cover rounded-lg'} />
			<div className="flex flex-col justify-center">
				<div className={'row'}>
					<span className="text-gray-400">{name}</span>
				</div>
				<span>{description}</span>
			</div>
		</div>
	)
}
