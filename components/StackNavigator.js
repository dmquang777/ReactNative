import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './screens/Profile';
import Main from './screens/Main';
import MyCart from './screens/MyCart';
import ProductInfo from './screens/ProductInfo';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
    </Stack.Navigator>
  );
};

const UserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, UserStackNavigator};
