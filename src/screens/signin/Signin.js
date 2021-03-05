import React, { useState, useEffect } from 'react';
import {
	View,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	Platform,
	ScrollView,
	TouchableOpacity,
	Modal,
	BackHandler,
} from 'react-native';
import { Button, TextInput, Snackbar, HelperText } from 'react-native-paper';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import { IconX, ICON_TYPE } from '../../icons';
import { svgIcon } from '../../../assets/svgfiles';

import Routes from '../../navigation/routes';
import NavigationService from '../../navigation';
import colors from '../../theme/Colors';
import { validateEmail, validatePassword } from '../../helper';
import { SvgXml } from 'react-native-svg';
import { ButtonX, InputX } from '../../components';

import useAppTheme from '../../theme/context';

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
	const [ismodalVisible, setModalVisible] = useState(true);

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

	const handleModal = event => {
		event.preventDefault();
		setModalVisible(!ismodalVisible);
	};

	// useEffect(() => {
	// 	const backAction = () => {
	// 		console.log(ismodalVisible);
	// 		if (ismodalVisible) {
	// 			BackHandler.exitApp();
	// 		} else {
	// 			console.log('Rupesh');
	// 		}
	// 	};
	// 	const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
	// 	return () => backHandler.remove();
	// }, []);

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
						<InputX
							mode="flat"
							value={formState.values.Email || ''}
							placeholder="username"
							label="username"
							onChangeText={text => handleEmailChange(text)}
							style={[styles.textInput]}
						/>
						{/* <TextInput
							mode="flat"
							value={formState.values.Email || ''}
							// placeholder="email/mobile"
							label="Username"
							onChangeText={text => handleEmailChange(text)}
							style={[styles.textInput]}
						/>
						/> */}
						{emailError ? <HelperText type="error">{emailError}</HelperText> : null}
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
						{passwordError ? <HelperText type="error">{passwordError}</HelperText> : null}
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
					<View style={styles.fingerprintViewContainer}>
						<TouchableOpacity style={styles.fingerprintBtn} onPress={handleModal}>
							<Text style={styles.modalSmallText}>Login using fingerprint</Text>
						</TouchableOpacity>
						<SvgXml xml={svgIcon.Fingerprint} style={styles.fingerprintIconStyle} />
					</View>
				</View>
				<Modal transparent visible={ismodalVisible} animationType="slide">
					<View style={styles.ModalView}>
						<View style={styles.signInOption}>
							<Text style={styles.modalTextStyle}>Confirm Using Your Fingerprint</Text>
							<View style={{ marginTop: 20 }}>
								<SvgXml xml={svgIcon.Fingerprint} style={styles.fingerprintIconStyle} />
								<Text style={styles.modalSmallText}>Touch the fingerprint sensor</Text>
								<TouchableOpacity style={styles.modalBtn} onPress={handleModal}>
									<Text style={styles.modalBtnTextStyle}>Use Password</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
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
	ModalView: {
		flex: 1,
		backgroundColor: colors.transparentBlack,
		justifyContent: 'flex-end',
	},

	fingerprintViewContainer: {
		marginVertical: 20,
		paddingVertical: 20,
		alignItems: 'center',
	},
	fingerprintBtn: {
		width: '100%',
		//backgroundColor: colors.white,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 5,
	},

	signInOption: {
		marginTop: 10,
		backgroundColor: colors.white,
		width: '100%',
		paddingVertical: 25,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	modalTextStyle: {
		fontFamily: 'Poppins',
		fontSize: 20,
		fontStyle: 'normal',
		fontWeight: '500',
		textAlign: 'center',
		color: colors.black,
		lineHeight: 30,
	},
	fingerprintIconStyle: {
		alignSelf: 'center',
		marginVertical: 20,
	},
	modalSmallText: {
		fontFamily: 'Jost',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: 12,
		lineHeight: 17,
		textAlign: 'center',
		color: '#757575',
	},
	modalBtn: {
		backgroundColor: colors.white,
		height: 40,
		width: 90,
		margin: 16,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	modalBtnTextStyle: {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: 16,
		color: '#3AACE2',
	},
});
