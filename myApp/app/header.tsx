import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useUser } from "../app/UserContext";

const Header = () => {
  const { userDetails } = useUser();
  const name = userDetails?.name || "User";

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 22) return "Good Evening";
    return "Good Night";
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.profileImage} />
        <View>
          <Text style={styles.greeting}>{getGreeting()},</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      {/* Search Bar */}
      {/* <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="#999" style={styles.searchIcon} />
        <TextInput placeholder="Search" placeholderTextColor="#999" style={styles.searchInput} />
      </View> */}

      {/* Notification Icon */}
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15, backgroundColor: "#0A021F" },
  leftSection: { flexDirection: "row", alignItems: "center" },
  profileImage: { width: 50, height: 50, borderRadius: 25, backgroundColor: "#ccc", marginRight: 10 },
  greeting: { color: "#ccc", fontSize: 14 },
  name: { color: "white", fontSize: 18, fontWeight: "bold" },
  searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#1E102F", borderRadius: 10, paddingHorizontal: 10, flex: 1, marginHorizontal: 10 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: "white" },
});

export default Header;
