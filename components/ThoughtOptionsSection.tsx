import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThoughtOption } from './ThoughtOption'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors  } from '@/constants/Colors';


type ThoughtOptionsSectionProps = {
  onOptionSelect?: (label: string) => void; // Specify the parameter type for the function
};

const options = [
  "free wi-fi",
  "power outlets available",
  "good parking",
  "good seating",
  "study spot",
  "yummy pastries",
  "affordable",
  "highly recommend"
];

export const ThoughtOptionsSection: React.FC<ThoughtOptionsSectionProps> = ({ onOptionSelect }) => {
  return (
    <View style={styles.container}>
      <ThoughtOption label="free wi-fi" onPress={() => onOptionSelect && onOptionSelect("free wi-fi")} />
      {options.map(option => (
        <ThoughtOption label={option} onPress={() => onOptionSelect && onOptionSelect(option)} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 5,
  },
});
