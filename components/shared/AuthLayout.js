import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'

const useStyles = makeStyles({
	root: {
		width: '100vw',
		height: '100vh'
	},
	bg: {
		objectFit: 'cover',
		pointerEvents: 'none',
		position: 'absolute',
		top: 0,
		left: 0
	}
})

export default function Index({ children }) {
	const classes = useStyles()

	return (
		<main className={classes.root}>
			<Image src="/bg-desktop.png" alt="background" layout="fill" className={classes.bg} />
			{children}
		</main>
	)
}
