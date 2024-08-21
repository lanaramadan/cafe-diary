import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

import { Colors } from '@/constants/Colors';

type TabBarIconProps = IconProps<ComponentProps<typeof Ionicons>['name']> & {
  focused?: boolean;
};

export function TabBarIcon({ style, focused, ...rest }: TabBarIconProps) {
  return (
    <View style={focused ? [styles.iconContainer, style] : style}>
      <Ionicons size={28} style={[style]} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: Colors['light'].secondaryPink,
    borderRadius: 20, 
    padding: 7, 
  },
});
