import React, { useState } from 'react'
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core/styles'
import ConfirmEmailSvg from '../../components/Icons/ConfirmEmail'
import VerificationSuccess from '../../components/shared/VerificationSuccess'
import VerificationFailed from '../../components/shared/VerificationFailed'

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
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	}
}))

function SimpleBackdrop({ isLoading, status }) {
	const classes = useStyles()
	const router = useRouter()

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
			<Backdrop className={classes.backdrop} open={isLoading}>
				<CircularProgress color="primary" />
			</Backdrop>
			<VerificationSuccess
				open={status === 'success'}
				onClose={() => {
					router.push('/')
				}}
				// backdrop={true}
			/>
			<VerificationFailed
				open={status === 'failed'}
				onClose={() => {
					router.push('/register')
				}}
				// backdrop={true}
			/>
		</main>
	)
}

const Verify = ({ code }) => {
	function _sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	// if (typeof window === 'undefined') {
	// 	// We can only use the router to push on the client-side
	// 	return <SimpleBackdrop isLoading={true} />
	// }

	const router = useRouter()

	if (!code) {
		router.push('/register')
	} else {
		_sleep(1000).then(() => {
			if (code === 'success') {
				return <SimpleBackdrop isLoading={false} status="success" />
			} else {
				return <SimpleBackdrop isLoading={false} status="failed" />
			}
		})
	}

	return <SimpleBackdrop isLoading={true} />
}

Verify.getInitialProps = async context => {
	const { code } = context.query
	return {
		code
	}
}

export default Verify
