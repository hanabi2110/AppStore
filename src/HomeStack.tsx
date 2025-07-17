import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AllProductsScreen from '../screens/AllProductsScreen';

export type HomeStackParamList = {
  MainTab: undefined;
  AllProducts: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTab" component={HomeScreen} />
    <Stack.Screen name="AllProducts" component={AllProductsScreen} />
  </Stack.Navigator>
);

export default HomeStack;
