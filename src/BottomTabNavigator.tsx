import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';

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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="MyOrder" component={HomeStack} />
      <Tab.Screen name="Favorite" component={HomeStack} />
      <Tab.Screen name="MyProfile" component={HomeStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
