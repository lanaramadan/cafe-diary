import { Image, StyleSheet, Platform, ScrollView, SafeAreaView, StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatisticsSection } from '@/components/StatisticsSection';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

import { useColorScheme } from '@/hooks/useColorScheme';

// const colorScheme = useColorScheme();

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <ThemedView style={styles.stepContainer}>
        <StatisticsSection />
      </ThemedView>
    </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors['light'].background
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

