import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '../src/Link'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import FacebookIcon from '../components/Icons/Facebook'
import GoogleIcon from '../components/Icons/Google'
import LinkedinIcon from '../components/Icons/Linkedin'
import VisibilityPasswordTextField from '../components/shared/VisibilityPasswordTextField'
import { Formik, Form } from 'formik'
import { SigninStep1Schema, SigninStep2Schema } from '../constants/AuthSchema'
import clsx from 'clsx'
import AuthLayout from '../components/shared/AuthLayout'
import { GoogleButton, FacebookButton, LinkedinButton } from '../components/shared/SocialButtons'

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

	const [currentStep, setCurrentStep] = useState(0)
	const lastStep = 1

	function _sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	async function _submitForm(values, actions) {
		await _sleep(1000)
		alert(JSON.stringify(values, null, 2))
		actions.setSubmitting(false)

		setCurrentStep(step => Math.min(step + 1, lastStep))
	}

	const handleSubmit = (values, actions) => {
		if (currentStep === lastStep) {
			_submitForm(values, actions)
		} else {
			setCurrentStep(step => Math.min(step + 1, lastStep))
			actions.setTouched({})
			actions.setSubmitting(false)
		}
	}

	const Step1 = props => {
		const { values, handleChange, handleBlur, touched, errors } = props
		return (
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
		)
	}
	const Step2 = props => {
		const { values, handleChange, handleBlur, touched, errors, setFieldValue } = props
		return (
			<VisibilityPasswordTextField
				className={clsx(classes.mb2, classes.mt5)}
				variant="outlined"
				label="Password"
				fullWidth
				name="password"
				value={values.password}
				values={values}
				onChange={handleChange}
				onBlur={handleBlur}
				helperText={touched.password ? errors.password : ''}
				error={touched.password && Boolean(errors.password)}
				setFieldValue={setFieldValue}
				visibleName="isPassVisible"
			/>
		)
	}

	return (
		<AuthLayout>
			<Box position="relative" display="flex" alignItems="center" height={1}>
				<Box position="relative" width={600} marginLeft="auto" marginRight="13%">
					<Paper square={false} className={classes.paper}>
						<Typography variant="h4" component="h4" color="textPrimary" className="text-center">
							Sign in
						</Typography>

						<Formik
							onSubmit={handleSubmit}
							initialValues={{ email: '', password: '', remember: false, isPassVisible: false }}
							validationSchema={currentStep === 0 ? SigninStep1Schema : SigninStep2Schema}
						>
							{props => (
								<Form>
									{currentStep === 0 && Step1(props)}
									{currentStep === 1 && Step2(props)}
									{currentStep === 1 && (
										<Box display="flex" justifyContent="space-between" alignItems="center">
											<FormControlLabel
												className={classes.mb2}
												control={
													<Checkbox
														color="primary"
														value={props.values.remember}
														onChange={props.handleChange}
														name="remember"
														onBlur={props.handleBlur}
													/>
												}
												label="Keep me signed in"
												classes={{ label: classes.formLabel, root: classes.formRoot }}
											/>
											<Link href="/forgot" className={classes.mb2}>
												*Forgot password?
											</Link>
										</Box>
									)}
									<Box textAlign="center" mt={5} mb={4}>
										<Button
											type="submit"
											color="primary"
											variant="contained"
											size="large"
											className={classes.submit}
											classes={{ label: classes.submitLabel }}
										>
											continue
										</Button>
									</Box>
									<GoogleButton
										variant="contained"
										startIcon={<GoogleIcon viewBox="0 5 15 15" />}
										fullWidth
										size="large"
										className={classes.mb1}
									>
										Sign Up With Google
									</GoogleButton>
									<FacebookButton
										variant="contained"
										startIcon={<FacebookIcon />}
										fullWidth
										size="large"
										className={classes.mb1}
									>
										Sign Up With Facebook
									</FacebookButton>
									<LinkedinButton
										variant="contained"
										startIcon={<LinkedinIcon viewBox="0 0 30 30" />}
										fullWidth
										size="large"
										className={classes.mb1}
									>
										Sign Up With Linkedin
									</LinkedinButton>
								</Form>
							)}
						</Formik>

						<Divider className={classes.divider} />
						<Box textAlign="center">
							<Typography variant="subtitle1">Don't have an account?</Typography>
							<Button
								component={Link}
								noLinkStyle
								href="/register"
								color="primary"
								classes={{ label: classes.textTransCap }}
							>
								Create an account
							</Button>
						</Box>
					</Paper>
				</Box>
			</Box>
		</AuthLayout>
	)
}
