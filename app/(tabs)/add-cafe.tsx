import {
  Image,
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  View, } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { CafeSearch } from '@/components/CafeSearch';
import { StarSelect } from '@/components/StarSelect';

import { CafeData } from '@/components/types/CafeData';

import { ThoughtOptionsSection } from '@/components/ThoughtOptionsSection';
import { NoteTextbox } from '@/components/NoteTextbox';
import { SelectedCafe } from '@/components/SelectedCafe';



import { useState } from 'react';

// const colorScheme = useColorScheme();

export default function AddCafeScreen() {
  const [cafeData, setCafeData] = useState<CafeData | null>(null);
  const [starCount, setStarCount] = useState<Number>(3);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [note, setNote] = useState<string>("");

  const handleCafeSelect = (data: CafeData) => {
    setCafeData(data);
  };
  
  const handleStarSelect = (value: Number) => {
    setStarCount(value);
  };

  const handleNoteChange = (value: string) => {
    setNote(value);
  };

  const handleOptionSelect = (label: string) => {
    setSelectedOptions(prevOptions => {
      if (prevOptions.includes(label)) {
        return prevOptions.filter(opt => opt !== label);
      } else {
        return [...prevOptions, label];
      }
    })
  };
  

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} keyboardShouldPersistTaps='always'>
      <ThemedView style={styles.stepContainer}>
        <View>
          {/* cafe search */}
          <CafeSearch onCafeSelect={handleCafeSelect} />
          
          {cafeData && (
              <>
                <SelectedCafe name={cafeData.name} address={cafeData.address} />
                {/* <ThemedText type="subtitle">Selected Cafe:</ThemedText>
                <ThemedText type="default">{cafeData.name}</ThemedText>
                <ThemedText type="default">{cafeData.address}</ThemedText>
                <ThemedText type="default">{cafeData.location.lat}, {cafeData.location.lng}</ThemedText> */}
              </>
            )}
        </View>

        {/* rating */}
        <View style={styles.questionContainer}>
          <ThemedText type="subtitle">How would you rate your overall experience?</ThemedText>
          <StarSelect onStarSelect={handleStarSelect}/>
        </View>

        {/* options */}
        <View style={styles.questionContainer}>
          <ThemedText type="subtitle">What are your thoughts about the café?</ThemedText>
          <ThoughtOptionsSection onOptionSelect={handleOptionSelect} />
          <NoteTextbox onChangeText={handleNoteChange} />
        </View>



        {/* adding drinks */}
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
  questionContainer: {
    gap: 8,
    marginBottom: 8,
    // flex: 1,
    alignItems: 'left'
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
