import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tabColor = Colors[colorScheme ?? 'light'].primaryPink

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "Colors[colorScheme ?? 'light'].tint",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle:{height:55},
        tabBarStyle: {
          backgroundColor: '#FFFDF6',
          borderTopColor: tabColor,
          borderTopWidth: 2,
        },
      }}>
        
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'home-outline'} color={tabColor} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-cafe"
        options={{
          title: 'Add Cafe',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'add-circle-outline'} color={tabColor} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'map-outline'} color={tabColor} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'person-outline'} color={tabColor} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
