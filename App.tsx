import React, { useState, useEffect } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, Text, Image, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Home, User, Plus, Bell, MessageSquare } from 'lucide-react-native';
import { Theme } from './src/constants/Theme';
import { SplashScreen } from './src/screens/SplashScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { MOCK_USER } from './src/constants/MockData';

// Screen Imports (to be implemented)
import { HomeScreen } from './src/screens/HomeScreen';
import { FeedScreen } from './src/screens/FeedScreen';
import { CreatePostScreen } from './src/screens/CreatePostScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 33,
        backgroundColor: Theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: Theme.colors.tabBar,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={{
        tabBarLabel: 'Community',
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [appState, setAppState] = useState<'splash' | 'login' | 'main'>('splash');

  if (appState === 'splash') {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StatusBar />
          <SplashScreen onFinish={() => setAppState('main')} />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    );
  }

  // if (appState === 'login') {
  //   return (
  //     <SafeAreaProvider>
  //       <StatusBar style="light" />
  //       <LoginScreen onLogin={() => setAppState('main')} />
  //     </SafeAreaProvider>
  //   );
  // }

  const CustomTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: Theme.colors.primary,
      background: Theme.colors.background,
      card: Theme.colors.card,
      text: Theme.colors.text,
      border: Theme.colors.border,
      notification: Theme.colors.notification,
    },
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },
});
