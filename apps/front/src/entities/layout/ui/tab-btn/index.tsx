import { IonBadge, IonIcon, IonItem, IonLabel, IonTabButton } from '@ionic/react'
import { RouteInstance, RouteParams } from 'atomic-router'
import { Link, LinkProps } from 'atomic-router-react'

import style from './style.module.scss'

import { cn } from '~/shared'

export interface TabBtnProps<Params extends RouteParams> extends LinkProps<Params> {
	icon: string
	text?: string
	count?: number
	size?: string
}

export const TabBtn = <Params extends RouteParams>({
	icon,
	text,
	to,
	count,
	className,
	size = 'large',
}: TabBtnProps<Params>) => {
	const cnWrap = cn(className, style.wrap)

	return (
		<Link to={to} className={cnWrap}>
			<IonTabButton>
				<IonIcon icon={icon} size={size} />
				{count && <span className={style.badge}>{count}</span>}
			</IonTabButton>
		</Link>
	)
}
