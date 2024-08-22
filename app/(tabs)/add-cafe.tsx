import {
  Image,
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar, } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// const colorScheme = useColorScheme();

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Subtitle</ThemedText>
        <ThemedText type="default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ThemedText>
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
