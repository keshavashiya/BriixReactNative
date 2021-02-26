import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { View, KeyboardAvoidingView, StyleSheet, Text, Platform, ScrollView } from 'react-native';
import { Button, TextInput, Snackbar } from 'react-native-paper';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import useCheckVersion from '../CheckVersion';
import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import Routes from '../../navigation/routes';
import NavigationService from '../../navigation';

const Signin = props => {
	const InitialState = {
		isValid: false,
		values: {},
		touched: {},
		errors: {},
	};

	const [formState, setFormState] = useState(InitialState);
	const [disabled, setDisabled] = useState(true);

	const [visible, setVisible] = useState(false);

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
				<Text style={styles.header}>Welcome,</Text>
				<Text style={styles.text}>Sign In to Continue</Text>
				<View style={styles.inner}>
					<View>
						<TextInput
							// mode="outlined"
							value={formState.values.Email || ''}
							// placeholder="email/mobile"
							label="Username"
							onChangeText={text => handleEmailChange(text)}
							style={[styles.textInput,{marginBottom:8}]}
						/>
						<TextInput
							// mode="outlined"
							value={formState.values.Password || ''}
							// placeholder="Password/mobile"
							label="Password"
							onChangeText={text => handlePasswordChange(text)}
							style={styles.textInput}
							secureTextEntry={true}
						/>
						<Text style={[styles.smalltext,{marginBottom:8,marginBottom:30}]}>Forgot Password?</Text>
					</View>
					<View style={styles.btnContainer}>
						<Button
							style={[styles.button,{marginBottom:10}]}
							// disabled={disabled}
							// title="Submit"
                            color="#002842"
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
							onPress={handleSubmit}>
							Sign Up
						</Button> 
					</View>
				</View>
				{/* </TouchableWithoutFeedback> */}
				<Snackbar
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
				</Snackbar>
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
		borderRadius: 0,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
        height: 64,
		overflow: 'hidden',
		backgroundColor: '#fff',
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
		// paddingTop: 10,
		// justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		// flex: 1,
		justifyContent: 'center',
        height: 64,
		width: '100%'
	},
});
