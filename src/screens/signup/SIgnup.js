import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { View, KeyboardAvoidingView, StyleSheet, Text, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Feather';
import { IconX, ICON_TYPE } from '../../icons';
// import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import useCheckVersion from '../CheckVersion';
// import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

// import Routes from '../../navigation/routes';
// import NavigationService from '../../navigation';

import { Snackbar } from '../components';

const Signup = props => {
	const InitialState = {
		isValid: false,
		values: {},
		touched: {},
		errors: {},
	};

	const [formState, setFormState] = useState(InitialState);
	// const [disabled, setDisabled] = useState(true);
	const [viewPassword, setViewPassword] = useState(true);
	const [viewConfirmPassword, setViewConfirmPassword] = useState(true);

	const [visible, setVisible] = useState(false);

	// eslint-disable-next-line no-unused-vars
	const onToggleSnackBar = () => setVisible(true);

	const onDismissSnackBar = () => setVisible(false);

	const handleFirstNameChange = text => {
		// dispatch(actionsApp.state(APP_STATE.PRIVATE));
		setFormState(frmState => ({
			...frmState,
			values: {
				...frmState.values,
				FirstName: text,
			},
			touched: {
				...formState.touched,
				FirstName: true,
			},
		}));
	};

	const handleLastNameChange = text => {
		// dispatch(actionsApp.state(APP_STATE.PRIVATE));
		setFormState(frmState => ({
			...frmState,
			values: {
				...frmState.values,
				LastName: text,
			},
			touched: {
				...formState.touched,
				LastName: true,
			},
		}));
	};

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
	};

	const handleMobileNumberChange = text => {
		// dispatch(actionsApp.state(APP_STATE.PRIVATE));
		setFormState(frmState => ({
			...frmState,
			values: {
				...frmState.values,
				MobileNumber: text,
			},
			touched: {
				...formState.touched,
				MobileNumber: true,
			},
		}));
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
	};

	const handleConfirmPasswordChange = text => {
		// dispatch(actionsApp.state(APP_STATE.PRIVATE));
		setFormState(frmState => ({
			...frmState,
			values: {
				...frmState.values,
				ConfirmPassword: text,
			},
			touched: {
				...formState.touched,
				ConfirmPassword: true,
			},
		}));
	};

	const handleSubmit = event => {
		event.preventDefault();

		console.log(formState.values);
	};

	return (
		<ScrollView>
			<KeyboardAvoidingView
				// keyboardVerticalOffset={10}
				// behavior={'position'}
				//   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.container}>
				{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
				<Text style={styles.header}>Welcome!</Text>
				<Text style={styles.text}>Sign Up to Continue</Text>
				<Text style={styles.smalltext}>All fields are madatory</Text>
				<View style={styles.inner}>
					<View>
						<View style={styles.nameView}>
							<View style={styles.fNameView}>
								<TextInput
									autoFocus
									mode="flat"
									value={formState.values.FirstName || ''}
									// placeholder="email/mobile"
									label="First Name"
									onChangeText={text => handleFirstNameChange(text)}
									style={styles.textInput}
									// underlineColor="transparent"
									// theme={{ colors: { text: 'green', primary: 'yellow' } }}
								/>
							</View>
							<View style={styles.lNameView}>
								<TextInput
									mode="flat"
									value={formState.values.LastName || ''}
									// placeholder="email/mobile"
									label="Last Name"
									onChangeText={text => handleLastNameChange(text)}
									style={styles.textInput}
								/>
							</View>
						</View>
						<TextInput
							mode="flat"
							value={formState.values.Email || ''}
							// placeholder="email/mobile"
							label="Email Id"
							onChangeText={text => handleEmailChange(text)}
							style={styles.textInput}
						/>
						<TextInput
							mode="flat"
							value={formState.values.MobileNumber || ''}
							// placeholder="Mobile Number/mobile"
							label="Mobile Number"
							onChangeText={text => handleMobileNumberChange(text)}
							style={styles.textInput}
						/>
						<TextInput
							mode="flat"
							value={formState.values.Password || ''}
							// placeholder="Password/mobile"
							label="Password"
							onChangeText={text => handlePasswordChange(text)}
							style={styles.textInput}
							secureTextEntry={viewPassword}
							right={
								<TextInput.Icon
									name={() => (
										<IconX
											origin={ICON_TYPE.MATERIAL_COMMUNITY}
											name={viewPassword ? 'eye-outline' : 'eye-off-outline'}
											size={30}
										/>
									)}
									onPress={() => setViewPassword(!viewPassword)}
								/>
							}
						/>
						<TextInput
							mode="flat"
							value={formState.values.ConfirmPassword || ''}
							// placeholder="ConfirmPassword/mobile"
							label="Confirm Password"
							onChangeText={text => handleConfirmPasswordChange(text)}
							style={styles.textInput}
							secureTextEntry={viewConfirmPassword}
							right={
								<TextInput.Icon
									name={() => (
										<IconX
											origin={ICON_TYPE.MATERIAL_COMMUNITY}
											name={viewConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
											size={30}
										/>
									)}
									onPress={() => setViewConfirmPassword(!viewConfirmPassword)}
								/>
							}
						/>
					</View>
					<View style={styles.btnContainer}>
						<Button
							style={styles.button}
							// disabled={disabled}
							// title="Submit"
							mode="contained"
							onPress={handleSubmit}>
							Sign up
						</Button>
						<Text style={styles.smalltext}>By creating your account, you agree</Text>
						<Text style={styles.terms}>to our Terms & Conditions</Text>
					</View>
				</View>
				{/* </TouchableWithoutFeedback> */}
				{/* <Snackbar
					duration={1000}
					visible={visible}
					onDismiss={onDismissSnackBar}
					// action={{
					// 	label: 'Undo',
					// 	onPress: () => {
					// 		// Do something
					// 	},
					// }}
				>
					OTP successfully sent!
				</Snackbar> */}

				{visible && (
					<Snackbar onDismissSnackBar={onDismissSnackBar} visible={visible} message="Signup message" />
				)}
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default Signup;

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
		color: 'gray',
	},
	textInput: {
		borderRadius: 10,
		// borderTopLeftRadius: 0,
		// borderTopRightRadius: 0,
		borderBottomWidth: 0,
		// height: 57,
		overflow: 'hidden',
		marginTop: 12,
		// backgroundColor: '#fff',
	},
	smalltext: {
		fontSize: 12,
		marginTop: 16,
		// paddingTop: 24,
		paddingLeft: 24,
		color: 'gray',
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
		paddingTop: 32,
		// justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		// flex: 1,
		width: '100%',
	},
});
