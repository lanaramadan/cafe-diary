import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatisticBox } from './StatisticBox'; // Adjust the path as needed
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native'; 

export const StatisticsSection: React.FC = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <StatisticBox value={20} label="cafés visited" />
      <StatisticBox
        value={4}
        label="favorited cafés" 
        // icon={<Ionicons name="heart" size={20} color={Colors['light'].primaryGreen} />}
      />
      <StatisticBox 
        value={3.8} 
        label="average" 
        icon={<Ionicons name="star" size={20} color={Colors['light'].primaryPink} />}
        moreLabel="rating" 
      />
      <StatisticBox 
        moreLabel="add cafe" 
        icon={<Ionicons name="add-circle" size={28} color={Colors['light'].primaryPink} />}
        onPress={() => navigation.navigate('add-cafe')} 
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
