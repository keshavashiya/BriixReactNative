import React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const SnackBar = props => {
	const { visible, message, onDismissSnackBar } = props;
	return (
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
			{message}
		</Snackbar>
	);
};

export default SnackBar;

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
