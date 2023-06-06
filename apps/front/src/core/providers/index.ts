import compose from 'compose-function'
import { WithTheme } from 'core/providers/with-theme'
import { WithIonic } from 'core/providers/with-ionic'
import { WithReactBody } from '~/core/providers/with-react-body'

import { WithStore } from './with-store'
import { WithPersist } from './with-persist'
import { WithLayout } from './with-layout'

export const withProviders = compose(
	// WithReactBody,
	WithStore,
	WithPersist,
	WithIonic,
	WithTheme,
	WithLayout,
)
