import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStackNavigator, UserStackNavigator} from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'ios-information-circle'}
              size={26}
              color={'#000'}
            />
          ),
        }}
      />
      <Tab.Screen name="User" component={UserStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
