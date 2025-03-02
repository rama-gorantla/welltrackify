import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ActivityTracking = () => {
  const metrics: { id: string; name: string; value: string; icon: keyof typeof Ionicons.glyphMap }[] = [
    { id: "1", name: "Calories", value: "345 Kcal", icon: "flame" },
    { id: "2", name: "Sleep", value: "85 Score", icon: "moon" },
    { id: "3", name: "Water", value: "1.2 Liters", icon: "water" },
    { id: "4", name: "Walk", value: "2,227 Steps", icon: "walk" },
    { id: "5", name: "Heart", value: "85 BPM", icon: "heart" },
    { id: "6", name: "Training", value: "0 Min", icon: "barbell" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Activity</Text>

      <View style={styles.grid}>
        {metrics.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Ionicons name={item.icon} size={30} color="#007AFF" />
            <Text style={styles.metricName}>{item.name}</Text>
            <Text style={styles.metricValue}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  metricName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  metricValue: {
    fontSize: 14,
    color: "#555",
  },
});

export default ActivityTracking;
