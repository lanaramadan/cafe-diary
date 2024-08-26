import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';


type ThoughtOptionProps = {
  label?: string;
  onPress?: (label: string) => void;
};

export const ThoughtOption: React.FC<ThoughtOptionProps> = ({ label, onPress }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
    if (onPress && label) {
      onPress(label);
    }
  };
  
  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.container, selected && styles.selected]}>
          {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:  Colors['light'].background, 
    borderRadius: 10,
    borderColor: Colors['light'].primaryPink, 
    borderWidth: 1.5,
    paddingHorizontal: 6,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selected: {
    backgroundColor:  Colors['light'].secondaryPink, 
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
});
