import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatisticBox } from './StatisticBox'; // Adjust the path as needed
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

export const StatisticsSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatisticBox value={17} label="cafés visited" />
      <StatisticBox value={4} label="favorites" />
      <StatisticBox 
        value={3.8} 
        label="average" 
        icon={<Ionicons name="star" size={20} color={Colors['light'].primaryGreen} />}
        moreLabel="rating" 
      />
      <StatisticBox 
        moreLabel="add cafe" 
        icon={<Ionicons name="add-circle" size={28} color={Colors['light'].primaryGreen} />} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
  },
});
