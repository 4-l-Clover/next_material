import React from 'react'
import { withStyles, darken } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export const FacebookButton = withStyles(theme => ({
	root: {
		color: 'white',
		backgroundColor: theme.palette.common.facebook,
		'&:hover': {
			backgroundColor: darken(theme.palette.common.facebook, 0.2)
		}
	},
	label: {
		textTransform: 'capitalize'
	}
}))(Button)

export const GoogleButton = withStyles(theme => ({
	root: {
		color: 'white',
		backgroundColor: theme.palette.common.google,
		'&:hover': {
			backgroundColor: darken(theme.palette.common.google, 0.2)
		}
	},
	label: {
		textTransform: 'capitalize'
	}
}))(Button)

export const LinkedinButton = withStyles(theme => ({
	root: {
		color: 'white',
		backgroundColor: theme.palette.common.linkedin,
		'&:hover': {
			backgroundColor: darken(theme.palette.common.linkedin, 0.2)
		}
	},
	label: {
		textTransform: 'capitalize'
	}
}))(Button)
