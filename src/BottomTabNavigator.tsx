import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        let iconName: string;
        if (route.name === 'Home') iconName = 'home-outline';
        else if (route.name === 'MyOrder') iconName = 'list-outline';
        else if (route.name === 'Favorite') iconName = 'heart-outline';
        else if (route.name === 'MyProfile') iconName = 'person-outline';
        else iconName = 'help-outline';

        return {
          tabBarIcon: ({ color, size }) => (
            <Icon name={iconName} size={size} color={color} />
          ),
          tabBarActiveTintColor: '#5C4DB1',
          tabBarInactiveTintColor: '#999',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#eee',
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarLabelStyle: { fontSize: 12, marginBottom: 3 },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyOrder" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={HomeScreen} />
      <Tab.Screen name="MyProfile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
