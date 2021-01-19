import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormDialog from './FormDialog/FormDialog'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import UnsuccessfulSvg from '../Icons/Unsuccessful'

const styles = theme => ({
	disabledText: {
		cursor: 'auto',
		color: theme.palette.text.disabled
	},
	submit: {
		width: 240,
		height: 60
	},
	submitLabel: {
		fontSize: 18
	},
	mx3: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
	}
})

function VerificationFailed(props) {
	const { onClose, open, classes } = props

	return (
		<>
			<FormDialog
				open={open}
				onClose={onClose}
				// loading={user.isLoading}
				onFormSubmit={onClose}
				hideBackdrop
				content={
					<Box textAlign="center">
						<UnsuccessfulSvg />
						<Typography variant="h3" component="h3">
							Unsuccessful
						</Typography>
						<Typography variant="subtitle1" className={classes.mx3}>
							Verification is not successful.
						</Typography>
					</Box>
				}
			/>
		</>
	)
}

VerificationFailed.propTypes = {
	onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(VerificationFailed)
