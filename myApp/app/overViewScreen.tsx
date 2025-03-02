import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";
import Header from "./header";
import FeaturesScreen from "./featuresScreen";
import BottomNavigation from "./bottomNavigationBar";

const OverviewScreen = () => {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />

        {/* Workout Progress Card */}
        <View style={styles.card}>
          <Text style={styles.cardText}>You’ve done 3 workouts this week!</Text>
          <Text style={styles.subText}>75% of your weekly goal is completed.</Text>
          <ProgressBar progress={0.75} color="#9C27B0" style={styles.progressBar} />
        </View>

        {/* Most Popular Workouts */}
        <FeaturesScreen />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#0A021F",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 80, // Prevents content from being hidden under the nav
  },
  card: {
    backgroundColor: "#1E102F",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
});

export default OverviewScreen;
