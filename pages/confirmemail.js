import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ConfirmEmailSvg from '../components/Icons/ConfirmEmail'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100vw',
		height: '100vh'
	},
	h3: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(3)
	},
	submit: {
		width: 240,
		height: 60
	},
	submitLabel: {
		fontSize: 18
	}
}))

export default function Index() {
	const classes = useStyles()

	return (
		<main className={classes.root}>
			<Box
				position="relative"
				display="flex"
				alignItems="center"
				height={1}
				justifyContent="center"
				flexDirection="column"
				width={1}
				height={1}
			>
				<ConfirmEmailSvg />
				<Typography variant="h3" component="h3" className={classes.h3}>
					Confirm your email!
				</Typography>
				<Typography variant="subtitle1" className="text-center">
					Your account has been successfully registered. to complete the process
					<br />
					please check your email for a validation request.
				</Typography>

				<Box textAlign="center" mt={7}>
					<Button
						type="submit"
						color="primary"
						variant="contained"
						size="large"
						className={classes.submit}
						classes={{ label: classes.submitLabel }}
					>
						send email
					</Button>
				</Box>
			</Box>
		</main>
	)
}
