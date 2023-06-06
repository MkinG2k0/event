import { DevSupport } from '@react-buddy/ide-toolbox'
import { ComponentPreviews, useInitial } from '~/dev'

export const WithReactBody = (component: FC) => (props) => {
	return (
		<DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
			<>{component(props)}</>
		</DevSupport>
	)
}
