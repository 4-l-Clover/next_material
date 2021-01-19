import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormDialog from './FormDialog/FormDialog'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import SuccessSvg from '../Icons/Success'

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

function VerificationSuccess(props) {
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
						<SuccessSvg />
						<Typography variant="h3" component="h3">
							Success!
						</Typography>
						<Typography variant="subtitle1" className={classes.mx3}>
							Verification is successful.
						</Typography>
					</Box>
				}
			/>
		</>
	)
}

VerificationSuccess.propTypes = {
	onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(VerificationSuccess)
