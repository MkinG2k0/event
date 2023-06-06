import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { Pages } from '~/pages'
import { Content } from '~/pages/event-info/ui/content'
import { EventHead } from '~/pages/event-info/ui/head'
import EventInfo from '~/pages/event-info/ui/page'
import Main from '~/pages/main/ui/page'

import { PaletteTree } from './palette'

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree />}>
			<ComponentPreview path="/Content">
				<Content />
			</ComponentPreview>
			<ComponentPreview path="/EventInfo">
				<EventInfo />
			</ComponentPreview>
			<ComponentPreview path="/Main">
				<Main />
			</ComponentPreview>
			<ComponentPreview path="/Pages">
				<Pages />
			</ComponentPreview>
		</Previews>
	)
}

const logo =
	'https://avatars.mds.yandex.net/i?id=3f0cece55735bafaa2bf8e3eba7c60971bc582f9-8497136-images-thumbs&n=13'
export default ComponentPreviews
