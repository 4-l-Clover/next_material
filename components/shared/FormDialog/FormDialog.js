import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import DialogTitleWithCloseIcon from './DialogTitleWithCloseIcon'

const styles = theme => ({
	dialogPaper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBottom: theme.spacing(3),
		maxWidth: 992,
		minWidth: 992
	},
	actions: {
		marginTop: theme.spacing(2)
	},
	dialogPaperScrollPaper: {
		maxHeight: 'none'
	},
	dialogContent: {
		paddingTop: 0,
		paddingBottom: 0
	}
})

function FormDialog(props) {
	const { classes, open, onClose, loading, headline, onFormSubmit, content, actions, hideBackdrop } = props
	return (
		<Dialog
			open={open}
			onClose={onClose}
			disableBackdropClick={loading}
			disableEscapeKeyDown={loading}
			classes={{
				paper: classes.dialogPaper,
				paperScrollPaper: classes.dialogPaperScrollPaper
			}}
			hideBackdrop={hideBackdrop ? hideBackdrop : false}
		>
			<DialogTitleWithCloseIcon title={headline} onClose={onClose} disabled={loading} />
			<DialogContent className={classes.dialogContent}>
				<form onSubmit={onFormSubmit}>
					<div>{content}</div>
					<Box width="100%" className={classes.actions}>
						{actions}
					</Box>
				</form>
			</DialogContent>
		</Dialog>
	)
}

FormDialog.propTypes = {
	classes: PropTypes.object,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	// headline: PropTypes.string.isRequired,
	// loading: PropTypes.bool.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	content: PropTypes.element.isRequired,
	// actions: PropTypes.element.isRequired,
	hideBackdrop: PropTypes.bool.isRequired
}

export default withStyles(styles, { withTheme: true })(FormDialog)
