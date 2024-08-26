import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TextInput, } from 'react-native';

import { Colors } from '@/constants/Colors';


interface NoteTextboxProps {
  onChangeText: (value: string) => void;
}

export const NoteTextbox: React.FC<NoteTextboxProps> = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Any more notes?"
        placeholderTextColor={Colors['light'].secondaryPink}
        multiline = {true}
        numberOfLines = {5}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: {
    justifyContent: 'center',
    color: Colors['light'].text, 
    height: 150,
    width: 350,
    padding: 10,
    borderRadius: 15,
    borderColor: Colors['light'].primaryPink, 
    borderWidth: 1.5,
  },
});

