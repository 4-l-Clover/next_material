import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '../src/Link'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import FacebookIcon from '../components/Icons/Facebook'
import GoogleIcon from '../components/Icons/Google'
import LinkedinIcon from '../components/Icons/Linkedin'
import VisibilityPasswordTextField from '../components/shared/VisibilityPasswordTextField'
import { Formik } from 'formik'
import { RegisterSchema } from '../constants/AuthSchema'
import clsx from 'clsx'
import AuthLayout from '../components/shared/AuthLayout'
import { GoogleButton, FacebookButton, LinkedinButton } from '../components/shared/SocialButtons'
import { useRouter } from 'next/router'
import ButtonCircularProgress from '../components/shared/ButtonCircularProgress'

const useStyles = makeStyles(theme => ({
	paper: {
		borderRadius: 10,
		padding: theme.spacing(5)
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
	const router = useRouter()

	function _sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	return (
		<AuthLayout>
			<Box position="relative" display="flex" alignItems="center" height={1}>
				<Box position="relative" width={600} marginLeft="auto" marginRight="13%">
					<Paper square={false} className={classes.paper}>
						<Typography variant="h4" component="h4" color="textPrimary" className="text-center">
							Create an account
						</Typography>

						<Grid container spacing={1} className={classes.buttonGroup}>
							<Grid item xs>
								<FacebookButton variant="contained" startIcon={<FacebookIcon />} fullWidth size="large">
									Facebook
								</FacebookButton>
							</Grid>
							<Grid item xs>
								<GoogleButton variant="contained" startIcon={<GoogleIcon viewBox="0 5 15 15" />} fullWidth size="large">
									Google
								</GoogleButton>
							</Grid>
							<Grid item xs>
								<LinkedinButton
									variant="contained"
									startIcon={<LinkedinIcon viewBox="0 0 30 30" />}
									fullWidth
									size="large"
								>
									Linkedin
								</LinkedinButton>
							</Grid>
						</Grid>

						<Formik
							initialValues={{
								fName: '',
								lName: '',
								userName: '',
								email: '',
								password: '',
								passwordConfirm: '',
								isPassVisible: false,
								isPassConfVisible: false,
								tos: false
							}}
							validationSchema={RegisterSchema}
							onSubmit={async () => {
								await _sleep(1000)
								router.push('/confirmemail')
							}}
						>
							{({ values, touched, errors, handleChange, handleBlur, setFieldValue, handleSubmit, isSubmitting }) => (
								<form onSubmit={handleSubmit}>
									<Box display="flex">
										<TextField
											className={clsx(classes.mb2, classes.mr2)}
											variant="outlined"
											label="First Name"
											name="fName"
											type="text"
											value={values.fName}
											onChange={handleChange}
											onBlur={handleBlur}
											helperText={touched.fName ? errors.fName : ''}
											error={touched.fName && Boolean(errors.fName)}
											fullWidth
										/>
										<TextField
											className={classes.mb2}
											variant="outlined"
											label="Last Name"
											name="lName"
											type="text"
											value={values.lName}
											onChange={handleChange}
											onBlur={handleBlur}
											helperText={touched.lName ? errors.lName : ''}
											error={touched.lName && Boolean(errors.lName)}
											fullWidth
										/>
									</Box>
									<Box display="flex">
										<TextField
											className={clsx(classes.mb2, classes.mr2)}
											variant="outlined"
											label="Username"
											name="userName"
											type="text"
											value={values.userName}
											onChange={handleChange}
											onBlur={handleBlur}
											helperText={touched.userName ? errors.userName : ''}
											error={touched.userName && Boolean(errors.userName)}
											fullWidth
										/>
										<TextField
											className={classes.mb2}
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
									</Box>
									<VisibilityPasswordTextField
										className={classes.mb2}
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
									<VisibilityPasswordTextField
										className={classes.mb2}
										variant="outlined"
										label="Confirm password"
										name="passwordConfirm"
										fullWidth
										value={values.passwordConfirm}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText={touched.passwordConfirm ? errors.passwordConfirm : ''}
										error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
										setFieldValue={setFieldValue}
										visibleName="isPassConfVisible"
									/>
									<FormControlLabel
										className={classes.mb2}
										control={
											<Checkbox
												color="primary"
												value={values.tos}
												onChange={handleChange}
												name="tos"
												onBlur={handleBlur}
											/>
										}
										label="Accept Terms of Service and Privacy policy to complete your registration process"
										classes={{ label: classes.formLabel, root: classes.formRoot }}
									/>
									{touched.tos && Boolean(errors.tos) && (
										<Typography variant="subtitle2" className={classes.helper}>
											{errors.tos}
										</Typography>
									)}
									<Box textAlign="center" mt={5}>
										<Button
											color="primary"
											variant="contained"
											size="large"
											className={classes.submit}
											classes={{ label: classes.submitLabel }}
											type="submit"
											disabled={isSubmitting}
										>
											Sign up
											{isSubmitting && <ButtonCircularProgress />}
										</Button>
									</Box>
									<Divider className={classes.divider} />
									<Box textAlign="center">
										<Typography variant="subtitle1">Already have an account?</Typography>
										<Button
											component={Link}
											noLinkStyle
											href="/"
											color="primary"
											classes={{ label: classes.textTransCap }}
										>
											Sign in
										</Button>
									</Box>
								</form>
							)}
						</Formik>
					</Paper>
				</Box>
			</Box>
		</AuthLayout>
	)
}
