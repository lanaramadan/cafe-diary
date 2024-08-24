import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View, } from 'react-native';
import Stars from 'react-native-stars';

import { Colors } from '@/constants/Colors';

interface StarSelectProps {
  onStarSelect: (value: Number) => void;
}

export const StarSelect: React.FC<StarSelectProps> = ({ onStarSelect }) => {
  return (
    <View style={styles.starContainer}>
      <Stars
        half={false}
        default={3}
        update={(val: Number)=>{onStarSelect(val)}}
        spacing={5}
        starSize={35}
        count={5}
        fullStar={require('../assets/stars/starFilled.png')}
        emptyStar={require('../assets/stars/starEmpty.png')}
        halfStar={require('../assets/stars/starHalf.png')}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  starContainer: {
    alignItems:'center'
  }
});

