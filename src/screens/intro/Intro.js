/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import {
	// useSelector,
	useDispatch,
	//   shallowEqual
} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useInjectSaga } from 'redux-injectors'; // useInjectReducer
import useAppTheme from '../../theme/context';

import sagaApp from '../../services/store/saga';
import { name as nameApp, actions as actionsApp } from '../../services/store/slice';

const Intro = () => {
	useInjectSaga({ key: nameApp, saga: sagaApp });

	// const { state } = useAppContext();
	const { theme } = useAppTheme();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionsApp.state());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleIntro = async () => {
		try {
			await AsyncStorage.setItem('intro', 'INTRO');
			dispatch(actionsApp.state());
		} catch (e) {
			// error reading value
		}
	};

	return (
		<View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.primary }}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 32 }}>A whole new way</Text>
				<Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 32 }}>to invest</Text>
				<Text style={{ color: 'gray', fontSize: 16 }}>A safe & secure online process</Text>
				<Text style={{ color: 'gray', fontSize: 16 }}>to invest</Text>
			</View>
			{/* <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: '#fff', borderWidth: 2 }}> */}
			<Button contentStyle={styles.buttonContentStyle} mode="contained" onPress={handleIntro}>
				Get Started
			</Button>
			{/* </View> */}
		</View>
	);
};

export default Intro;

const styles = StyleSheet.create({
	buttonContentStyle: {
		height: 66,
		justifyContent: 'center',
		// alignItems: 'center',
		borderColor: '#fff',
		borderWidth: 2,
	},
});
