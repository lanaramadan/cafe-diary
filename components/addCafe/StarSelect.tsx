import React from "react";
import { StyleSheet, View } from "react-native";
import Stars from "react-native-stars";

interface StarSelectProps {
  onStarSelect: (value: number) => void;
}

/**
 * StarSelect component allows users to select a star rating.
 * When a rating is selected, the onStarSelect callback is triggered with the selected value.
 *
 * @param onStarSelect - Callback function to handle the selection of a star rating
 */
export const StarSelect: React.FC<StarSelectProps> = ({ onStarSelect }) => {
  return (
    <View style={styles.starContainer}>
      <Stars
        half={false}
        default={3}
        update={(val: number) => {
          // Trigger callback with selected rating value
          onStarSelect(val);
        }}
        spacing={5}
        starSize={35}
        count={5}
        fullStar={require("../../assets/stars/starFilled.png")}
        emptyStar={require("../../assets/stars/starEmpty.png")}
        halfStar={require("../../assets/stars/starHalf.png")}
      />
    </View>
  );
};

// Styles for the StarSelect component
const styles = StyleSheet.create({
  starContainer: {
    alignItems: "center",
  },
});
