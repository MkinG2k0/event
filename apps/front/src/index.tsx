import { DevSupport } from '@react-buddy/ide-toolbox'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '~/core'
import { ComponentPreviews, useInitial } from '~/dev'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<StrictMode>
		<App />
	</StrictMode>,
)
