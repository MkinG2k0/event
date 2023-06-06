import { FC } from 'react'

import { Header } from '../header'
import { Recommendation } from '../recommendation'

const Main: FC = ({}) => {
	return (
		<div className={'col-2 flex-auto '}>
			<Header />
			<div className={'p-2 px-4'}>
				<Recommendation />
			</div>
		</div>
	)
}

export default Main
