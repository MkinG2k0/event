import { FC } from 'react'

import { Info } from '../info'
import { Sponsors } from '../sponsor'

interface RightBarProps {}

export const RightBar: FC<RightBarProps> = ({}) => {
	return (
		<div className={'col-4 sm:w-80 py-5 '}>
			<Info />
			<div className={'max-sm:border-b-2 border-divider-dark'}> </div>
			<Sponsors />
		</div>
	)
}
