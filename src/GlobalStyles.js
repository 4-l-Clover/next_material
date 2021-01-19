import { withStyles } from '@material-ui/core'

const styles = theme => ({
	'@global': {
		/**
		 * Disable the focus outline, which is default on some browsers like
		 * chrome when focusing elements
		 */
		'*:focus': {
			outline: 0
		},
		'*, *::before, *::after': {
			boxSizing: 'border-box'
		},
		// "*": {
		//   color: "#1D1D1F",
		// },
		'.text-center': {
			textAlign: 'center'
		}
	}
})

function globalStyles() {
	return null
}

export default withStyles(styles, { withTheme: true })(globalStyles)
