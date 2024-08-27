import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

interface NoteTextboxProps {
  onChangeText: (value: string) => void;
}

/**
 * NoteTextbox component provides a text input field for users to add notes.
 *
 * @param onChangeText - Callback function to handle text changes
 */
export const NoteTextbox: React.FC<NoteTextboxProps> = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Any more notes?"
        placeholderTextColor={Colors["light"].secondaryPink}
        multiline={true}
        numberOfLines={5}
      />
    </View>
  );
};

// Styles for the NoteTextbox component
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  input: {
    justifyContent: "center",
    color: Colors["light"].text,
    height: 150,
    width: 350,
    padding: 10,
    borderRadius: 15,
    borderColor: Colors["light"].primaryPink,
    borderWidth: 1.5,
  },
});
