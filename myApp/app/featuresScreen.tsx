import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";

// Define type for the features
interface Feature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  screen: string; // Expo Router uses string paths instead of a defined stack type
}

const features: Feature[] = [
  { id: "1", title: "Activity Tracking", subtitle: "Monitor your workouts & progress.", icon: "bar-chart", screen: "activityTracking" },
  { id: "2", title: "Payment Details", subtitle: "View and manage your payments.", icon: "card", screen: "paymentDetails" },
  { id: "3", title: "Nutritional Recommendations", subtitle: "Personalized diet suggestions.", icon: "restaurant", screen: "nutritionalRecommends" },
  { id: "4", title: "Class Recorded Videos", subtitle: "Access past session recordings.", icon: "videocam", screen: "classRecords" },
  { id: "5", title: "Music", subtitle: "Listen to motivational tracks.", icon: "musical-notes", screen: "music" },
  { id: "6", title: "Social Connections", subtitle: "Engage with your batchmates.", icon: "people", screen: "socialConnections" },
];

const FeaturesScreen = () => {
  const router = useRouter(); // Expo Router Hook for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Your Features</Text>
      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.featureBox} 
            onPress={() => router.push(item.screen as any)} // Expo Router navigation
          >
            <Ionicons name={item.icon} size={24} color="#c5a9ff" style={styles.icon} />
            <Text style={styles.featureTitle}>{item.title}</Text>
            <Text style={styles.featureSubtitle}>{item.subtitle}</Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Check Now</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  heading: { color: "#fff", fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  featureBox: { flex: 1, backgroundColor: "#1E102F", padding: 15, margin: 5, borderRadius: 10, alignItems: "center" },
  icon: { marginBottom: 5 },
  featureTitle: { color: "#fff", fontSize: 14, fontWeight: "bold", marginBottom: 5, textAlign: "center" },
  featureSubtitle: { color: "#c5a9ff", fontSize: 12, textAlign: "center", marginBottom: 10 },
  button: { backgroundColor: "#c5a9ff", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 5, marginTop: 5 },
  buttonText: { color: "#1E102F", fontSize: 12, fontWeight: "bold" },
});

export default FeaturesScreen;
