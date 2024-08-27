import React from "react";
import { View, StyleSheet } from "react-native";
import { ThoughtOption } from "./ThoughtOption";

type ThoughtOptionsSectionProps = {
  onOptionSelect: (label: string) => void;
};

// Array of predefined options to be displayed in the ThoughtOptionsSection
const options = [
  "free wi-fi",
  "power outlets available",
  "good parking",
  "good seating",
  "study spot",
  "yummy pastries",
  "affordable",
  "highly recommend",
];

/**
 * ThoughtOptionsSection component displays a set of thought options.
 * Each option is rendered as a ThoughtOption component.
 * When an option is selected, the onOptionSelect callback.
 *
 * @param onOptionSelect - Callback function to handle the selection of an option
 */
export const ThoughtOptionsSection: React.FC<ThoughtOptionsSectionProps> = ({
  onOptionSelect,
}) => {
  return (
    <View style={styles.container}>
      {/* Render each option as a ThoughtOption component */}
      {options.map((option) => (
        <ThoughtOption key={option} label={option} onPress={onOptionSelect} />
      ))}
    </View>
  );
};

// Styles for the ThoughtOptionsSection component
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 5,
  },
});
