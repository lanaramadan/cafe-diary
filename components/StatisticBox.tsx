import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';


type StatisticBoxProps = {
  value?: string | number;
  label?: string;
  icon?: React.ReactNode;
  moreLabel?: string;
};

export const StatisticBox: React.FC<StatisticBoxProps> = ({ value, label, icon, moreLabel }) => {
  return (
    <View style={styles.container}>
        {value && <ThemedText style={styles.value}>{value}</ThemedText>}
        {label && <ThemedText style={styles.label}>{label}</ThemedText>}
        {icon && <View style={styles.icon}>{icon}</View>}
        {moreLabel && <ThemedText style={styles.label}>{moreLabel}</ThemedText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:  Colors['light'].secondaryGreen, 
    borderRadius: 10,
    borderColor: Colors['light'].primaryGreen, 
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 2,
    lineHeight: 28, 
  },
  label: {
    fontSize: 18,
    textAlign: 'center',
  },
  icon: {
    marginLeft: 2,
    marginRight: 2,
  },
});
