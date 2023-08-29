// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

import Home from './src/screens/Home';
import MyList from './src/screens/MyList';
import Browse from './src/screens/Browse';
import Simulcasts from './src/screens/Simulcasts';
import Account from './src/screens/Account';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <>
    <StatusBar barStyle="dark" />
      <Tab.Navigator
      style={{ backgroundColor: 'green' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'MyList') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Browse') {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === 'Simulcasts') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f47521',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          height: 52,
          paddingHorizontal: 4,
          paddingTop: 4,
          paddingBottom: 4,
          backgroundColor: '#23252b',
          position: 'absolute',
          borderTopWidth: 0,
      },
      })}
      >

        <Tab.Screen name="Home" component={Home}
        options={{ headerShown: false }}
        />
        <Tab.Screen name="MyList" component={MyList} 
        options={{tabBarLabel: "My List", title: "My List"}} /
        >
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Simulcasts" component={Simulcasts} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
      </>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
