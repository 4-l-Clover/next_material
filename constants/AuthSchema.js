import * as Yup from 'yup'

export const RegisterSchema = Yup.object().shape({
	fName: Yup.string().required('First Name is required!'),
	lName: Yup.string().required('Last Name is required!'),
	userName: Yup.string().required('Username is required!'),
	email: Yup.string()
		.required('Email is required!')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid Email address!'),
	password: Yup.string().required('Password is required!'),
	passwordConfirm: Yup.string()
		.required('Password Confirm is required!')
		.oneOf([Yup.ref('password'), null], 'Passwords must match!'),
	tos: Yup.boolean().oneOf([true], '*You must read and agree to the Terms of Service to continue')
})

export const SigninStep1Schema = Yup.object().shape({
	email: Yup.string()
		.required('Email is required!')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid Email address!')
})

export const SigninStep2Schema = Yup.object().shape({
	password: Yup.string().required('Password is required!')
})

export const VerificationSchema = Yup.object().shape({
	phone: Yup.string().required('Mobile number is required!')
})
