import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

type ThoughtOptionProps = {
  label: string;
  onPress: (label: string) => void;
};

/**
 * ThoughtOption component represents a togglable option.
 * When pressed, it calls the onPress callback with the label provided.
 *
 * @param label - The text label for the option
 * @param onPress - Callback function to handle press events
 */
export const ThoughtOption: React.FC<ThoughtOptionProps> = ({
  label,
  onPress,
}) => {
  // State to track whether the option is selected
  const [selected, setSelected] = useState(false);

  // Handle press event to toggle selection and call the onPress callback
  const handlePress = () => {
    setSelected(!selected);
    if (onPress && label) {
      onPress(label);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.container, selected && styles.selected]}>
        <ThemedText style={styles.label}>{label}</ThemedText>
      </View>
    </Pressable>
  );
};

// Styles for the ThoughtOption component
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors["light"].background,
    borderRadius: 10,
    borderColor: Colors["light"].primaryPink,
    borderWidth: 1.5,
    paddingHorizontal: 6,
    paddingVertical: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  selected: {
    backgroundColor: Colors["light"].secondaryPink,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
  },
});
