import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Button, TextInput, Snackbar, HelperText } from 'react-native-paper';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useInjectSaga } from 'redux-injectors'; // useInjectReducer
import { IconX, ICON_TYPE } from '../../icons';
import useAppTheme from '../../theme/context';

import Routes from '../../navigation/routes';
import NavigationService from '../../navigation';
import {validateEmail, validatePassword} from '../../helper';

const Signin = props => {
	const { theme } = useAppTheme();

	const InitialState = {
		isValid: false,
		values: {},
		touched: {},
		errors: {},
	};

	const [formState, setFormState] = useState(InitialState);
	const [eyeState, setEyeVisible] = useState(true);
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const handleEmailChange = text => {
		// dispatch(actionsApp.state(APP_STATE.PRIVATE));
		setFormState(frmState => ({
			...frmState,
			values: {
				...frmState.values,
				Email: text,
			},
			touched: {
				...formState.touched,
				Email: true,
			},
		}));
		setEmailError('');
	};

	const handlePasswordChange = text => {
		// dispatch(actionsApp.state(APP_STATE.PRIVATE));
		setFormState(frmState => ({
			...frmState,
			values: {
				...frmState.values,
				Password: text,
			},
			touched: {
				...formState.touched,
				Password: true,
			},
		}));
		setPasswordError('');
	};

	const handleSubmit = event => {
		event.preventDefault();
		setEmailError(validateEmail(formState.values.Email));
		setPasswordError(validatePassword(formState.values.Password));
		console.log(formState);
	};

	return (
		<ScrollView>
			<KeyboardAvoidingView
				// keyboardVerticalOffset={10}
				// behavior={'position'}
				//   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.container}>
				{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
				<Text style={styles.header}>Welcome,</Text>
				<Text style={styles.text}>Sign In to Continue</Text>
				<View style={styles.inner}>
					<View>
						<TextInput
							mode="flat"
							value={formState.values.Email || ''}
							// placeholder="email/mobile"
							label="Username"
							onChangeText={text => handleEmailChange(text)}
							style={[styles.textInput]}
						/>
						{emailError ? (
							<HelperText type="error">
								{emailError}
							</HelperText>
						) : null}
						<TextInput
							mode="flat"
							value={formState.values.Password || ''}
							// placeholder="Password/mobile"
							label="Password"
							onChangeText={text => handlePasswordChange(text)}
							style={styles.textInput}
							secureTextEntry={eyeState}
							right={
								<TextInput.Icon
									onPress={e => {
										setEyeVisible(eyeState ? false : true);
									}}
									name={() => (
										<IconX
											origin={ICON_TYPE.FEATHER_ICONS}
											name={eyeState ? 'eye-off' : 'eye'}
											size={16}
										/>
									)}
								/>
							}
						/>
						{passwordError ? (
							<HelperText type="error">
								{passwordError}
							</HelperText>
						) : null}
						<TouchableOpacity onPress={() => NavigationService.navigate(Routes.RESET_PASSWORD_SCREEN)}>
							<Text style={[styles.smalltext, { textAlign: 'right' }]}>Forgot Password?</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.btnContainer}>
						<Button
							style={[styles.button]}
							// disabled={disabled}
							// title="Submit"
							mode="contained"
							onPress={handleSubmit}>
							Sign In
						</Button>
					</View>
					<View style={styles.btnContainer}>
						<Button
							style={styles.button}
							// disabled={disabled}
							// title="Submit"
							color="#002842"
							mode="text"
							onPress={() => NavigationService.navigate(Routes.SIGNUP_SCREEN)}>
							Sign Up
						</Button>
					</View>
				</View>
				{/* </TouchableWithoutFeedback> */}
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default Signin;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inner: {
		padding: 24,
		flex: 1,
		justifyContent: 'space-around',
	},
	header: {
		color: '#121212',
		fontSize: 36,
		marginTop: 48,
		paddingTop: 24,
		paddingLeft: 24,
	},
	text: {
		fontSize: 18,
		// marginTop: 6,
		// paddingTop: 24,
		paddingLeft: 24,
		color: '#6E7191',
	},
	textInput: {
		borderRadius: 5,
		// borderTopLeftRadius: 0,
		// borderTopRightRadius: 0,
		borderBottomWidth: 0,
		// height: 57,
		overflow: 'hidden',
		marginTop: 12,
		// color: '#14142B',
		height: 68,
		fontSize: 18,
	},
	smalltext: {
		fontSize: 12,
		marginTop: 16,
		// paddingTop: 24,
		paddingLeft: 24,
		color: '#14142B',
	},
	terms: {
		fontSize: 12,
		// marginTop: 16,
		// paddingTop: 24,
		paddingLeft: 24,
		color: 'gray',
	},
	nameView: {
		flexDirection: 'row',
	},
	fNameView: {
		flex: 1,
		flexDirection: 'column',
		marginRight: 6,
	},
	lNameView: {
		flex: 1,
		flexDirection: 'column',
		marginLeft: 6,
	},
	btnContainer: {
		// backgroundColor: 'white',
		paddingTop: 30,
		// justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		// flex: 1,
		borderRadius: 4,
		width: '100%',
	},
});
