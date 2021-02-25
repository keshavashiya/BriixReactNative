/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Routes from '../routes';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
// import App from '../../Screens/App';
// import Profile from '../../Screens/Profile';
import { IconX, ICON_TYPE } from '../../icons';
import { createStackNavigator } from '@react-navigation/stack';
import useAppTheme from '../../theme/context';
// import useTranslation from '../../i18n';
import NavigationStyles from '../../styles/NavigationStyles';

const HomeStackScreen = () => {
	// const { t } = useTranslation();
	const { theme } = useAppTheme();

	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{
					title: 'home',
					headerStyle: [NavigationStyles.header_statusBar, { backgroundColor: theme.colors.header }],
					headerTitleStyle: [NavigationStyles.headerTitle, { color: theme.colors.headerTitle }],
				}}
				name="homestackscreen"
				component={Home}
			/>
		</Stack.Navigator>
	);
};

const ProfileStackScreen = () => {
	// const { t } = useTranslation();
	const { theme } = useAppTheme();

	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{
					title: 'Profile',
					headerStyle: [NavigationStyles.header_statusBar, { backgroundColor: theme.colors.header }],
					headerTitleStyle: [NavigationStyles.headerTitle, { color: theme.colors.headerTitle }],
				}}
				name="profilestackscreen"
				component={Profile}
			/>
		</Stack.Navigator>
	);
};

// const NotificationStackScreen = () => {
// 	// const { t } = useTranslation();
// 	const { theme } = useAppTheme();

// 	return (
// 		<Stack.Navigator>
// 			<Stack.Screen
// 				options={(route, navigation) => {
// 					return {
// 						title: t('settings'),
// 						headerStyle: [NavigationStyles.header_statusBar, { backgroundColor: theme.colors.header }],
// 						headerTitleStyle: [NavigationStyles.headerTitle, { color: theme.colors.headerTitle }],
// 					};
// 				}}
// 				name="notificationsstackscreen"
// 				component={App}
// 			/>
// 		</Stack.Navigator>
// 	);
// };

function getHomeIcon({ focused, color }) {
	return <IconX style={{ marginBottom: 5 }} origin={ICON_TYPE.OCTICONS} name={'home'} color={color} />;
}

function getProfileIcon({ focused, color }) {
	return <IconX style={{ marginBottom: 5 }} origin={ICON_TYPE.FEATHER_ICONS} name={'profile'} color={color} />;
}

// function getNotificationIcon({ focused, color }) {
// 	return <IconX style={{ marginBottom: 5 }} origin={ICON_TYPE.ANT_ICON} name={'notification'} color={color} />;
// }

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
	const { theme } = useAppTheme();
	return (
		<Tab.Navigator
			initialRouteName={Routes.HOME_SCREEN}
			backBehavior={'initialRoute'}
			inactiveColor="rgba(255,255,255,0.4)"
			activeColor={theme.colors.surface}
			shifting={true}
			barStyle={{ backgroundColor: theme.colors.primary }}
			labeled={false}>
			<Tab.Screen
				options={{
					tabBarIcon: getHomeIcon,
					title: 'Home',
				}}
				name={Routes.HOME_SCREEN}
				component={HomeStackScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: getProfileIcon,
					title: 'Home',
				}}
				name={Routes.PROFILE_SCREEN}
				component={ProfileStackScreen}
			/>
			{/* <Tab.Screen
				options={{
					tabBarIcon: getNotificationIcon,
					title: 'Home',
				}}
				name={Routes.NOTIFICATION_SCREEN}
				component={NotificationStackScreen}
			/> */}
		</Tab.Navigator>
	);
};

const Stack = createStackNavigator();

export default () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name={'bottomtabs'} component={BottomTabs} />
		</Stack.Navigator>
	);
};
