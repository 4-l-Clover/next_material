import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormDialog from './FormDialog/FormDialog'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

function SendMailSuccessDialog(props) {
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
						<Typography variant="h3" component="h3">
							Thanks you..
						</Typography>
						<Typography variant="subtitle1" className={classes.mx3}>
							Please check your email to get a link to sreset your password
						</Typography>
					</Box>
				}
				actions={
					<Box textAlign="center" mb={5}>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							size="large"
							className={classes.submit}
							classes={{ label: classes.submitLabel }}
						>
							close
						</Button>
					</Box>
				}
			/>
		</>
	)
}

SendMailSuccessDialog.propTypes = {
	onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(SendMailSuccessDialog)
