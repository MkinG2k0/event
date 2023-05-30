import { createHistoryRouter, createRoute } from 'atomic-router'
import { RouterProvider, Route } from 'atomic-router-react'
import { useEffect } from 'react'
import { fromObservable } from 'effector'

import Main from './main/ui/page'
import EventInfo from './event-info/ui/page'
import Events from './events/ui/page'

import { TabsLayout } from 'entities/layout/ui/tab-layout'
import Auth from 'pages/auth/ui/page'
import Todo from 'pages/tab-todos/ui/page'
import {
	authRoute,
	history,
	mainRoute,
	router,
	eventInfoRoute,
	eventsRoute,
} from '~/shared/config/routing'

export const Pages: FC = () => {
	return (
		<RouterProvider router={router}>
			<TabsLayout>
				<Route route={mainRoute} view={Main} />
				<Route route={authRoute} view={Auth} />
				<Route route={eventInfoRoute} view={EventInfo} />
				<Route route={eventsRoute} view={Events} />
			</TabsLayout>
		</RouterProvider>
	)
}
