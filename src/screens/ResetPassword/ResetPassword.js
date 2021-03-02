import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { View, KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
// import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import useCheckVersion from '../CheckVersion';
// import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import { IconX, ICON_TYPE } from '../../icons';

// import { useAppContext } from '../../services/auth/AppContext';
// import { APP_STATE } from '../../constants';

// import sagaApp from '../../services/store/saga';
// import { name as nameApp, actions as actionsApp } from '../../services/store/slice';

// import saga from '../login/store/saga';
// import { name, actions } from '../login/store/slice';
// import Routes from '../../navigation/routes';
// import NavigationService from '../../navigation';

// import { Snackbar } from '../components';

const ResetPassword = props => {
	// useInjectSaga({ key: name, saga });
	// useInjectSaga({ key: nameApp, saga: sagaApp });

	// const dispatch = useDispatch();

	// const { Reducer } = useSelector(
	// 	reducer => ({
	// 		Reducer: reducer.auth.login,
	// 	}),
	// 	shallowEqual,
	// );

	// const { UserName } = props.route.params;

	// const { setPasswordSuccess, setPasswordError } = Reducer;

	const InitialState = {
		isValid: false,
		values: {
			// UserName,
		},
		touched: {},
		errors: {},
	};

	const [formState, setFormState] = useState(InitialState);
	const [disabled, setDisabled] = useState(true);

	const [viewPassword, setViewPassword] = useState(true);
	const [viewConfirmPassword, setViewConfirmPassword] = useState(true);

	// const [visible, setVisible] = useState(false);

	// const onToggleSnackBar = () => setVisible(true);

	// const onDismissSnackBar = () => setVisible(false);

	useEffect(() => {
		if (formState.values.ConfirmPassword && formState.values.Password === formState.values.ConfirmPassword) {
			setDisabled(false);
		}
	}, [formState.values]);

	// useEffect(() => {
	// 	if (setPasswordSuccess) {
	// 		// console.log(setPasswordSuccess);
	// 		onToggleSnackBar();
	// 		if (setPasswordSuccess.status === 'success') {
	// 			// console.log('Login');
	// 			// NavigationService.navigate(Routes.LOGIN_SCREEN);
	// 			dispatch(actionsApp.state(APP_STATE.UNKNOWN));
	// 		}
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [setPasswordSuccess]);

	// useEffect(() => {
	// 	if (setPasswordError) {
	// 		// console.log(setPasswordError);
	// 		onToggleSnackBar();
	// 	}
	// }, [setPasswordError]);

	useEffect(() => {
		props.navigation.addListener('blur', () => {
			// dispatch(actions.reset());
			setFormState(InitialState);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

		if (!formState.values.Password && !formState.values.ConfirmPassword) {
			setDisabled(true);
		}

		// console.log(formState.values);
		// dispatch(actions.setPassword(formState.values));
	};

	return (
		<KeyboardAvoidingView
			// behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
			<Text style={styles.header}>Reset Password!</Text>
			{/* <Text style={styles.text}>Welcome</Text> */}
			<Text style={styles.smalltext}>Your new password must be different from the previous used passwords.</Text>
			<View style={styles.inner}>
				<View>
					<TextInput
						autoFocus
						mode="flat"
						value={formState.values.Password || ''}
						// placeholder="email/mobile"
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
										size={16}
									/>
								)}
								onPress={() => setViewPassword(!viewPassword)}
							/>
						}
					/>
					<TextInput
						mode="flat"
						value={formState.values.ConfirmPassword || ''}
						// placeholder="email/mobile"
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
										size={16}
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
						disabled={disabled}
						// title="Submit"
						mode="contained"
						onPress={handleSubmit}>
						Reset Password
					</Button>
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
				Password successfully set!
			</Snackbar> */}
			{/* {setPasswordSuccess && (
				<Snackbar onDismissSnackBar={onDismissSnackBar} visible={visible} message="Password successfully set" />
			)} */}

			{/* {setPasswordError && (
				<Snackbar
					onDismissSnackBar={onDismissSnackBar}
					visible={visible}
					message={setPasswordError && setPasswordError.payload.error.message}
				/>
			)} */}
		</KeyboardAvoidingView>
	);
};

export default ResetPassword;

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
		fontSize: 22,
		marginTop: 18,
		// paddingTop: 24,
		paddingLeft: 24,
	},
	smalltext: {
		fontSize: 12,
		marginTop: 4,
		// paddingTop: 24,
		paddingLeft: 24,
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
	btnContainer: {
		// backgroundColor: 'white',
		marginTop: 12,
		// justifyContent: 'center',
		alignItems: 'center',
	},
	resend: {
		color: 'red',
		marginBottom: 12,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		// flex: 1,
	},
	button: {
		// flex: 1,
		width: '100%',
	},
});
