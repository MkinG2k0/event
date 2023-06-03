import { Content } from '../content'
import { EventHead } from '../head'
import { RightBar } from '../right-bar'

import style from './style.module.scss'

const EventInfo: FC = () => {
	return (
		<div className={'flex flex-col h-full'}>
			<EventHead />
			<div className={'row flex-col flex-auto sm:flex-row'}>
				<Content />
				<RightBar />
			</div>
		</div>
	)
}

export default EventInfo
