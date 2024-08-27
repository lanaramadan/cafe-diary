import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';


type StatisticBoxProps = {
  name: string;
  address: string;
};

export const SelectedCafe: React.FC<StatisticBoxProps> = ({ name, address }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Ionicons name="storefront" size={25} color={Colors['light'].primaryPink} />
        <ThemedText style={styles.name}>{name}</ThemedText>
      </View>
        <ThemedText style={styles.address}>{address}</ThemedText>
    </View>


  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor:  Colors['light'].secondaryPink, 
    borderRadius: 10,
    borderColor: Colors['light'].primaryPink, 
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 15,
    textAlign: 'left',
  },
});
