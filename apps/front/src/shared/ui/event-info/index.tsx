import { FC } from 'react'

import { Logo } from '../logo'

import style from './style.module.scss'

interface EventInfoProps {
	src: string
	name: string
	description: string
}

export const EventInfo: FC<EventInfoProps> = ({ src, name, description }) => {
	return (
		<div className={'flex gap-3'}>
			<Logo src={src} />
			<div className={'flex flex-col justify-center'}>
				<div className={'row'}>
					<span className={'text-gray-400'}>{name}</span>
				</div>
				<span>{description}</span>
			</div>
		</div>
	)
}
