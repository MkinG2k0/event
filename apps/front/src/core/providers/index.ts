import compose from 'compose-function'
import { WithTheme } from 'core/providers/with-theme'
import { WithIonic } from 'core/providers/with-ionic'

import { WithStore } from './with-store'
import { WithPersist } from './with-persist'
import { WithLayout } from './with-layout'

export const withProviders = compose(WithStore, WithPersist, WithIonic, WithTheme, WithLayout)
