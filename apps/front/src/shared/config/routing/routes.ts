import { createRoute } from 'atomic-router'

export const authRoute = createRoute()
export const mainRoute = createRoute()
export const todoRoute = createRoute()
export const eventInfoRoute = createRoute<{ id: string }>()
export const eventsRoute = createRoute()
