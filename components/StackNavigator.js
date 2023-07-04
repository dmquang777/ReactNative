import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from './screens/User';
import Main from './screens/Home';
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
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, UserStackNavigator};
