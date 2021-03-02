const message = {
	VALIDATE_EMAIL: 'Email successfully validated',
	INVALIDATE_EMAIL: 'Email address is invalid!',
	EMPTY_EMAIL: 'Please enter your email address.',
	EMPTY_PASSWORD: 'Please enter your password.',
};

export const validateEmail = value => {
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (reg.test(value)) {
		return '';
	}else{
		return value ? message.INVALIDATE_EMAIL : message.EMPTY_EMAIL;
	}
};
export const validatePassword = value => {
	return value ? '' : message.EMPTY_PASSWORD;
};
