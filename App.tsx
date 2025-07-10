import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserScreen from './screens/UserScreen';
import BottomTabNavigator from './src/BottomTabNavigator';
import { initUserTable,insertUser} from './src/database';
import ProductListScreen from './screens/ProductListScreen';



export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  AdminProduct: undefined;
  UserScreen: undefined;
  MainTab: undefined;
  ProductList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    const setup = async () => {
      await initUserTable();

      try {
        await insertUser('admin@gmail.com', '1', 'admin');
      } catch (e) {
        console.log('Admin đã tồn tại');
      }
      try {
        await insertUser('user@gmail.com', '1', 'user');
      } catch (e) {
        console.log('User đã tồn tại');
      }
    };

    setup();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="MainTab" component={BottomTabNavigator} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}