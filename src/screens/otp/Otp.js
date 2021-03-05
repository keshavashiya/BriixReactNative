import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

import { validateOtp } from '../../helper';

const CELL_COUNT = 6;

const Otp = () => {
	const [enableMask] = useState(false);
	const [value, setValue] = useState(null);
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});

	const [otpError, setOtpError] = useState(null);

	// const toggleMask = () => setEnableMask(f => !f);

	const renderCell = ({ index, symbol, isFocused }) => {
		let textChild = null;

		if (symbol) {
			textChild = enableMask ? '•' : symbol;
		} else if (isFocused) {
			textChild = <Cursor />;
		}

		return (
			<Text
				key={index}
				style={[styles.cell, isFocused && styles.focusCell]}
				onLayout={getCellOnLayoutHandler(index)}>
				{textChild}
			</Text>
		);
	};

	const handleChange = val => {
		console.log(val);
		setValue(val);
	};

	const handleSubmit = () => {
		console.log(value);
		const msg = validateOtp(value);
		console.log(msg);
		if (msg) {
			setOtpError(msg);
		} else {
			setOtpError(null);
		}
	};
	return (
		<KeyboardAvoidingView
			// behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
			<Text style={styles.header}>OTP verification!</Text>
			{/* <Text style={styles.text}>Welcome</Text> */}
			<Text style={styles.smalltext}>Type the verification code we've sent you</Text>
			<View style={styles.inner}>
				<View>
					<CodeField
						ref={ref}
						{...props}
						value={value}
						onChangeText={handleChange}
						cellCount={CELL_COUNT}
						keyboardType="number-pad"
						textContentType="oneTimeCode"
						renderCell={renderCell}
					/>
					{otpError ? <HelperText type="error">{otpError}</HelperText> : null}
				</View>
				<View style={styles.btnContainer}>
					<Button
						style={styles.button}
						// title="Submit"
						mode="contained"
						onPress={handleSubmit}>
						Verify
					</Button>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Otp;

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
	cell: {
		width: 55,
		height: 55,
		lineHeight: 55,
		fontSize: 30,
		fontWeight: '700',
		textAlign: 'center',
		marginLeft: 8,
		borderRadius: 6,
		backgroundColor: '#eee',
	},
	focusCell: {
		borderColor: '#000',
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
