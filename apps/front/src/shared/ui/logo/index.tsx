interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Logo: FC<LogoProps> = (props) => {
	return (
		<img
			{...props}
			className={'w-14 h-14 object-cover rounded-lg '.concat(props?.className || '')}
		/>
	)
}
