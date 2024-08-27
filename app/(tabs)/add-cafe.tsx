import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { CafeSearch } from "@/components/addCafe/CafeSearch";
import { StarSelect } from "@/components/addCafe/StarSelect";
import { CafeData } from "@/components/types/CafeData";
import { ThoughtOptionsSection } from "@/components/addCafe/ThoughtOptionsSection";
import { NoteTextbox } from "@/components/addCafe/NoteTextbox";
import { SelectedCafe } from "@/components/addCafe/SelectedCafe";

/**
 * AddCafeScreen component allows users to add a new cafe to their history.
 * It includes search functionality for selecting a cafe, rating the cafe,
 * selecting options on the cafe, and adding notes.
 */
export default function AddCafeScreen() {
  // State to store the selected cafe data
  const [cafeData, setCafeData] = useState<CafeData | null>(null);

  // State to store the star rating for the cafe
  const [starCount, setStarCount] = useState<number>(3);

  // State to store the selected options about the cafe
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // State to store additional notes about the cafe
  const [note, setNote] = useState<string>("");

  /**
   * Handles the cafe selection from the CafeSearch component.
   * @param data - The selected cafe data
   */
  const handleCafeSelect = (data: CafeData) => {
    setCafeData(data);
  };

  /**
   * Handles the star rating selection from the StarSelect component.
   * @param value - The selected star rating
   */
  const handleStarSelect = (value: number) => {
    setStarCount(value);
  };

  /**
   * Handles changes to the note textbox.
   * @param value - The new note text
   */
  const handleNoteChange = (value: string) => {
    setNote(value);
  };

  /**
   * Handles the selection or deselection of options in the ThoughtOptionsSection component.
   * @param label - The label of the option to be selected or deselected
   */
  const handleOptionSelect = (label: string) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(label)) {
        return prevOptions.filter((opt) => opt !== label);
      } else {
        return [...prevOptions, label];
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always">
        <ThemedView style={styles.stepContainer}>
          <View>
            {/* Cafe search component for selecting a cafe */}
            <CafeSearch onCafeSelect={handleCafeSelect} />
            {/* Display selected cafe details if a cafe is selected */}
            {cafeData && (
              <SelectedCafe name={cafeData.name} address={cafeData.address} />
            )}
          </View>

          {/* Rating section for overall experience */}
          <View style={styles.questionContainer}>
            <ThemedText type="subtitle">
              How would you rate your overall experience?
            </ThemedText>
            <StarSelect onStarSelect={handleStarSelect} />
          </View>

          {/* Thoughts and notes section about the cafe */}
          <View style={styles.questionContainer}>
            <ThemedText type="subtitle">
              What are your thoughts about the café?
            </ThemedText>
            <ThoughtOptionsSection onOptionSelect={handleOptionSelect} />
            <NoteTextbox onChangeText={handleNoteChange} />
          </View>

          {/* Placeholder for adding drinks section */}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for the AddCafeScreen component
const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  questionContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems: "flex-start",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors["light"].background,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
