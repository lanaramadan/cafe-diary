import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { StatisticsSection } from "@/components/StatisticsSection";
import { Colors } from "@/constants/Colors";

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
    backgroundColor: Colors["light"].background,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
