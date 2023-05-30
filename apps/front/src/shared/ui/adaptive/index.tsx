import style from './style.module.scss'
import { FC, PropsWithChildren } from 'react'

interface AdaptiveProps {
	className?: string
}

export const Mobile: FC<PropsWithChildren<AdaptiveProps>> = ({ children, className = '' }) => {
	return <div className={`mobile ${className}`}>{children} </div>
}

export const PC: FC<PropsWithChildren<AdaptiveProps>> = ({ children, className }) => {
	return <div className={`pc ${className}`}>{children} </div>
}
