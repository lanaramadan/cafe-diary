import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tabColor = Colors[colorScheme ?? "light"].primaryPink;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: { height: 55 },

        
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: "#FFFDF6",
            borderTopColor: tabColor,
            borderTopWidth: 2,
          },
          default: {
            backgroundColor: "#FFFDF6",
            borderTopColor: tabColor,
            borderTopWidth: 2,
            paddingTop: 2,
          },
        }),
      }}>


      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={tabColor}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="add-cafe"
        options={{
          title: "Add Cafe",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "add-circle" : "add-circle-outline"}
              color={tabColor}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "map" : "map-outline"}
              color={tabColor}
              focused={focused}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={tabColor}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
