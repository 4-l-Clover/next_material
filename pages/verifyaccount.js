import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FacebookIcon from '../components/Icons/Facebook'
import GoogleIcon from '../components/Icons/Google'
import LinkedinIcon from '../components/Icons/Linkedin'
import { Formik, Form } from 'formik'
import { VerificationSchema } from '../constants/AuthSchema'
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
	mb2: {
		marginBottom: theme.spacing(2)
	},
	mb5: {
		marginBottom: theme.spacing(5)
	},
	submit: {
		width: 240,
		height: 60
	},
	submitLabel: {
		fontSize: 18
	},
	buttonGroup: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
	}
}))

export default function Index() {
	const classes = useStyles()

	function _sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	async function _submitForm(values, actions) {
		await _sleep(1000)
		alert(JSON.stringify(values, null, 2))
		actions.setSubmitting(false)
	}

	const handleSubmit = (values, actions) => {
		actions.setTouched({})
		_submitForm(values, actions)
	}

	return (
		<AuthLayout>
			<Box position="relative" display="flex" alignItems="center" height={1}>
				<Box position="relative" width={600} marginLeft="auto" marginRight="13%">
					<Paper square={false} className={classes.paper}>
						<Typography variant="h4" component="h4" color="textPrimary" className={clsx(classes.mb5, 'text-center')}>
							Please Verify Your Account
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" className="text-center">
							For account security, please verify your account either by authorizing with Facebook, Linkedin or by
							providing a cell number where we can send your verification
						</Typography>

						<Grid container spacing={1} className={classes.buttonGroup}>
							<Grid item xs={6}>
								<GoogleButton variant="contained" startIcon={<GoogleIcon viewBox="0 5 15 15" />} fullWidth size="large">
									Email confirmation
								</GoogleButton>
							</Grid>
							<Grid item xs={6}>
								<FacebookButton variant="contained" startIcon={<FacebookIcon />} fullWidth size="large">
									Facebook Verification
								</FacebookButton>
							</Grid>
							<Grid item xs={6}>
								<LinkedinButton
									variant="contained"
									startIcon={<LinkedinIcon viewBox="0 0 30 30" />}
									fullWidth
									size="large"
								>
									Captcha verification
								</LinkedinButton>
							</Grid>
							<Grid item xs={6}>
								<LinkedinButton
									variant="contained"
									startIcon={<LinkedinIcon viewBox="0 0 30 30" />}
									fullWidth
									size="large"
								>
									Linkedin Verification
								</LinkedinButton>
							</Grid>
						</Grid>

						<Typography variant="subtitle1" color="textPrimary" className="text-center">
							Send text verification
						</Typography>

						<Formik onSubmit={handleSubmit} initialValues={{ phone: '' }} validationSchema={VerificationSchema}>
							{props => (
								<Form>
									<TextField
										className={clsx(classes.mb2, classes.mt5)}
										variant="outlined"
										label="Mobile Number"
										name="phone"
										type="text"
										value={props.values.phone}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										helperText={props.touched.phone ? props.errors.phone : ''}
										error={props.touched.phone && Boolean(props.errors.phone)}
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
										>
											Verify
										</Button>
									</Box>
								</Form>
							)}
						</Formik>
					</Paper>
				</Box>
			</Box>
		</AuthLayout>
	)
}
