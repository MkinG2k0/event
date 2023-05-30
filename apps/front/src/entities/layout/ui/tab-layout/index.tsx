import { IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { Map } from 'react-easy-map'
import {
	bagHandleOutline,
	bookmarkOutline,
	logoReact,
	paperPlaneOutline,
	peopleOutline,
	personCircleOutline,
	personOutline,
	readerOutline,
	searchOutline,
} from 'ionicons/icons'
import { useMediaQuery } from 'react-responsive'

import { TabBtn } from '../tab-btn'

import style from './style.module.scss'

import { mainRoute, router } from '~/shared/config/routing'
interface TabsProps {}

export const TabsLayout: FC<TabsProps> = ({ children }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
	const clWrap = isMobile ? 'large' : 'large'
	return (
		<div className={style.wrap}>
			{/* <IonHeader>
				<IonToolbar className={'px-2'}>
					<IonTitle>Listen now</IonTitle>
				</IonToolbar>
			</IonHeader> */}

			<div className={style.tabs}>
				<div className={style.top}>
					<TabBtn icon={logoReact} to={mainRoute} size={clWrap} />
				</div>
				<div className={style.center}>
					<TabBtn
						icon={bagHandleOutline}
						to={mainRoute}
						className={style.hide}
						count={1}
						size={clWrap}
					/>
					<TabBtn icon={searchOutline} to={mainRoute} size={clWrap} />
					<TabBtn icon={paperPlaneOutline} to={mainRoute} count={1} size={clWrap} />
					<TabBtn icon={peopleOutline} to={mainRoute} size={clWrap} />
				</div>
				<div className={style.bottom}>
					<TabBtn icon={bookmarkOutline} to={mainRoute} className={style.hide} size={clWrap} />
					<TabBtn icon={personCircleOutline} to={mainRoute} size={clWrap} />
				</div>
			</div>
			<div className={style.content}>{children}</div>
		</div>
	)
}
