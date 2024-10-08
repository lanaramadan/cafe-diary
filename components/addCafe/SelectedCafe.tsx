import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type StatisticBoxProps = {
  name: string;
  address: string;
};

/**
 * SelectedCafe component displays the name and address of a selected cafe.
 *
 * @param name - The name of the selected cafe
 * @param address - The address of the selected cafe
 */
export const SelectedCafe: React.FC<StatisticBoxProps> = ({
  name,
  address,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Ionicons
          name="storefront"
          size={25}
          color={Colors["light"].primaryPink}
        />
        <ThemedText style={styles.name}>{name}</ThemedText>
      </View>
      <ThemedText style={styles.address}>{address}</ThemedText>
    </View>
  );
};

// Styles for the SelectedCafe component
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors["light"].secondaryPink,
    borderRadius: 10,
    borderColor: Colors["light"].primaryPink,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  nameContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  address: {
    fontSize: 15,
    textAlign: "left",
  },
});
