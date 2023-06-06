import { Content } from '../content'
import { EventHead } from '../head'
import { RightBar } from '../right-bar'

const EventInfo: FC = () => {
	return (
		<div className={'col h-full'}>
			<EventHead />
			<div className={'row-sm-col-2  flex-auto '}>
				<Content />

				<RightBar />
			</div>
		</div>
	)
}

export default EventInfo
