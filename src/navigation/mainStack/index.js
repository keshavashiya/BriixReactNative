/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from '../routes';
import MainStack from './MainStack';
import DrawerScreen from '../../screens/drawer';
import metrics from '../../theme/Metrics';

const Drawer = createDrawerNavigator();

export default props => {
	return (
		<Drawer.Navigator
			drawerPosition={'left'}
			drawerType="slide"
			edgeWidth={10}
			drawerStyle={{
				backgroundColor: '#fafafa',
				width: metrics.drawerWidth,
			}}
			drawerContent={DrawerScreen}>
			<Drawer.Screen name={Routes.HOME_STACK} component={MainStack} />
		</Drawer.Navigator>
	);
};
