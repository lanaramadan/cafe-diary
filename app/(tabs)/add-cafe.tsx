import {
  Image,
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar, } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { CafeSearch } from '@/components/CafeSearch';
import { CafeData } from '@/components/types/CafeData';

import { useState } from 'react';

// const colorScheme = useColorScheme();

export default function AddCafeScreen() {
  const [cafeData, setCafeData] = useState<CafeData | null>(null);

  const handleCafeSelect = (data: CafeData) => {
    setCafeData(data);
  };
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} keyboardShouldPersistTaps='always'>
      <ThemedView style={styles.stepContainer}>
        <CafeSearch onCafeSelect={handleCafeSelect} />
        {cafeData && (
            <>
              <ThemedText type="subtitle">Selected Cafe:</ThemedText>
              <ThemedText type="default">{cafeData.name}</ThemedText>
              <ThemedText type="default">{cafeData.address}</ThemedText>
              <ThemedText type="default">{cafeData.location.latitude}, {cafeData.location.longitude}</ThemedText>
            </>
          )}
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
