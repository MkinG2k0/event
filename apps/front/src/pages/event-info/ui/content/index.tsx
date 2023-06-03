import style from './style.module.scss'
import { FC } from 'react'

interface ContentProps {}

export const Content: FC<ContentProps> = ({}) => {
	return (
		<div className={'flex-auto col-2 border-b-2 md:border-r-2 border-divider-dark p-5'}>
			<div className={''}>
				<span className="text-lg">Описание</span>
				<div className="text-md text-medium">Какой то текст</div>
			</div>
			<div className={''}>
				<span className="text-lg">Что будем делать</span>
				<div className="text-md text-medium">
					<ul>
						<li>- Что то</li>
						<li>- Что то</li>
						<li>- Что то</li>
					</ul>
				</div>
			</div>
			<div className={''}>
				<span className="text-lg">Для кого ?</span>
				<div className="text-md text-medium">
					<ul>
						<li>- Для тебя</li>
						<li>- Друга</li>
						<li>- Кого угодно</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
