import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CalendarScreen from './calendarScreen/CalendarScreen';
import ControlScreen from './controlScreen/ControlScreen';
import MainScreen from './mainScreen/MainScreen';
import SettingScreen from './settingScreen/SettingScreen';
import { Image } from 'react-native';


const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="홈"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            
            if (route.name === '홈') {
                iconName = focused ? require('../../assets/images/AfterMainIcon.png') : require('../../assets/images/MainIcon.png');
              } else if (route.name === '내역') {
                iconName = focused ? require('../../assets/images/AfterCalendarIcon.png') : require('../../assets/images/CalendarIcon.png');
              } else if (route.name === '제어') {
                iconName = focused ? require('../../assets/images/AfterControlIcon.png') : require('../../assets/images/ControlIcon.png');
              } else if (route.name === '설정') {
                iconName = focused ? require('../../assets/images/AfterSettingIcon.png') : require('../../assets/images/SettingIcon.png')
              }
            return <Image source={iconName} style={{ width: 24, height: 24 }}/>;
          },
        })} shifting={false} barStyle={{ backgroundColor: '#60BA98' }} activeColor='black' inactiveColor='black'>
            <Tab.Screen name="홈" component={MainScreen}/>
            <Tab.Screen name="내역" component={CalendarScreen}/>
            <Tab.Screen name="제어" component={ControlScreen}/>
            <Tab.Screen name="설정" component={SettingScreen}/>
        </Tab.Navigator>
    )
}
export default TabNavigator;