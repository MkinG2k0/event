import { FC } from 'react'
import { Button } from 'ui'

import { NavBtn } from 'shared'
import { authRoute } from '~/shared/config/routing/routes'

const Main: FC = ({}) => {
	return (
		<div className={'col flex-auto justify-center items-center'}>
			Welcome
			<NavBtn to={authRoute}>NEXT</NavBtn>
			<Button />
		</div>
	)
}

export default Main
