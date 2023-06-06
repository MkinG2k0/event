import { Link } from 'atomic-router-react'

import style from './style.module.scss'

import { NavBtn } from '~/shared'
import { eventInfoRoute, eventsRoute } from '~/shared/config/routing'

const Events: FC = () => {
	return (
		<div className={'col-2 p-2'}>
			Events ok
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
