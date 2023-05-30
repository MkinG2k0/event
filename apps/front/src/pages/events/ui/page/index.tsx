import { NavBtn } from '~/shared'
import style from './style.module.scss'
import { eventInfoRoute, eventsRoute } from '~/shared/config/routing'
import { Link } from 'atomic-router-react'

const Events: FC = () => {
	return (
		<div className={style.wrap}>
			Events
			<NavBtn
				className={'flex-auto'}
				classNameBtn={'w-full'}
				to={eventInfoRoute}
				params={{ id: 'uuid' }}
			>
				Event
			</NavBtn>
		</div>
	)
}

export default Events
