import React from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { setNestedObjectValues } from 'formik'

function VisibilityPasswordTextField(props) {
	const { onVisibilityChange, values, setFieldValue, visibleName, ...rest } = props
	return (
		<TextField
			{...rest}
			type={values?.[visibleName] ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							aria-label="Toggle password visibility"
							onClick={e => {
								setFieldValue(visibleName, !values?.[visibleName])
							}}
							onMouseDown={event => {
								event.preventDefault()
							}}
						>
							{values?.[visibleName] ? <VisibilityIcon /> : <VisibilityOffIcon />}
						</IconButton>
					</InputAdornment>
				)
			}}
		></TextField>
	)
}

export default VisibilityPasswordTextField
