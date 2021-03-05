const message = {
	EMPTY_FIELD: "Field can't be empty.",
	// VALIDATE_EMAIL: 'Email successfully validated',
	INVALIDATE_EMAIL: 'Email address is invalid!',
	EMPTY_EMAIL: 'Please enter your email address.',
	EMPTY_PASSWORD: 'Please enter your password.',
	PASSWORD_MISMATCH: 'Password and Confirm password are not same.',
	EMPTY_OTP: 'Please enter otp code.',
	INVALID_MOBILE: 'Mobile Number is invalid',
};

export const validateEmail = value => {
	// eslint-disable-next-line no-useless-escape
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (reg.test(value)) {
		return null;
	} else {
		return value ? message.INVALIDATE_EMAIL : message.EMPTY_EMAIL;
	}
};

export const validateField = value => {
	return value ? null : message.EMPTY_FIELD;
};

export const validateMobile = value => {
	// return value ? null : message.EMPTY_FIELD;
	if (!value) {
		return message.EMPTY_FIELD;
	} else if (value && value.length < 10) {
		return message.INVALID_MOBILE;
	} else {
		return null;
	}
};

export const validatePassword = value => {
	return value ? null : message.EMPTY_PASSWORD;
};

export const comparePassword = (password, confirm) => {
	// return value ? '' : message.EMPTY_PASSWORD;
	if (password === confirm) {
		return null;
	} else {
		return message.PASSWORD_MISMATCH;
	}
};

export const validateOtp = value => {
	// return value && value.length < 6 ? message.EMPTY_OTP : null;
	if (!value) {
		return message.EMPTY_OTP;
	} else if (value && value.length < 6) {
		return message.EMPTY_OTP;
	} else {
		return null;
	}
};
