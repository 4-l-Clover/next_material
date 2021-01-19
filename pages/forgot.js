import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Formik, Form } from 'formik'
import { SigninStep1Schema } from '../constants/AuthSchema'
import clsx from 'clsx'
import AuthLayout from '../components/shared/AuthLayout'
import ButtonCircularProgress from '../components/shared/ButtonCircularProgress'
import SendMailSuccessDialog from '../components/shared/SendMailSuccessDialog'

const useStyles = makeStyles(theme => ({
	paper: {
		borderRadius: 10,
		padding: theme.spacing(5)
	},
	mt5: {
		marginTop: theme.spacing(5)
	},
	textTransCap: {
		textTransform: 'capitalize'
	},
	formLabel: {
		paddingTop: 9
	},
	formRoot: {
		alignItems: 'flex-start',
		marginBottom: theme.spacing(2)
	},
	mb2: {
		marginBottom: theme.spacing(2)
	},
	mb1: {
		marginBottom: theme.spacing(1)
	},
	mr2: {
		marginRight: theme.spacing(2)
	},
	helper: {
		color: theme.palette.error.main,
		marginLeft: theme.spacing(4),
		fontWeight: 'normal',
		marginTop: theme.spacing(-1.5),
		marginBottom: theme.spacing(5)
	},
	submit: {
		width: 240,
		height: 60
	},
	submitLabel: {
		fontSize: 18
	},
	divider: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(3)
	},
	buttonGroup: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
	}
}))

export default function Index() {
	const classes = useStyles()
	const [visibleDialog, setVisibleDialog] = useState(false)

	function _sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	async function handleSubmit(values, actions) {
		await _sleep(1000)
		actions.setSubmitting(false)
		setVisibleDialog(true)
	}

	return (
		<AuthLayout>
			{!visibleDialog ? (
				<Box position="relative" display="flex" alignItems="center" height={1}>
					<Box position="relative" width={600} marginLeft="auto" marginRight="13%">
						<Paper square={false} className={classes.paper}>
							<Typography variant="h4" component="h4" color="textPrimary" className="text-center">
								Retrieve password
							</Typography>

							<Formik onSubmit={handleSubmit} initialValues={{ email: '' }} validationSchema={SigninStep1Schema}>
								{({ values, handleChange, handleBlur, touched, errors, isSubmitting }) => (
									<Form>
										<TextField
											className={clsx(classes.mb2, classes.mt5)}
											variant="outlined"
											label="Email Address"
											name="email"
											type="text"
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											helperText={touched.email ? errors.email : ''}
											error={touched.email && Boolean(errors.email)}
											fullWidth
										/>
										<Box textAlign="center" mt={5} mb={4}>
											<Button
												type="submit"
												color="primary"
												variant="contained"
												size="large"
												className={classes.submit}
												classes={{ label: classes.submitLabel }}
												disabled={isSubmitting}
											>
												Send
												{isSubmitting && <ButtonCircularProgress />}
											</Button>
										</Box>
									</Form>
								)}
							</Formik>
						</Paper>
					</Box>
				</Box>
			) : (
				<SendMailSuccessDialog
					onClose={() => {
						setVisibleDialog(!visibleDialog)
					}}
					open={visibleDialog}
				/>
			)}
		</AuthLayout>
	)
}
