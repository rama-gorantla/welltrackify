import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Define Type for Transactions
type TransactionType = {
  id: string;
  date: string;
  amount: string;
  status: "Success" | "Pending" | "Failed";
};

// Main Component
const PaymentDetails: React.FC = () => {
  const isDarkMode = useColorScheme() === "dark";

  // Welltrackify Color Codes
  const colors = {
    primary: "#4CAF50",
    secondary: "#FF9800",
    background: isDarkMode ? "#1C1C1E" : "#F5F5F5",
    cardBackground: isDarkMode ? "#2C2C2E" : "#FFFFFF",
    textPrimary: isDarkMode ? "#FFF" : "#333",
    textSecondary: "#888",
    success: "#4CAF50",
    pending: "#FF9800",
    failed: "#FF3B30",
  };

  // Mock Data - Payment History
  const [transactions] = useState<TransactionType[]>([
    { id: "1", date: "Feb 20, 2025", amount: "$29.99", status: "Success" },
    { id: "2", date: "Jan 20, 2025", amount: "$29.99", status: "Success" },
    { id: "3", date: "Dec 20, 2024", amount: "$29.99", status: "Failed" },
    { id: "4", date: "Nov 20, 2024", amount: "$29.99", status: "Success" },
  ]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Subscription Plan Details */}
      <View style={[styles.card, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.planText, { color: colors.textPrimary }]}>💳 Current Plan: Welltrackify Premium</Text>
        <Text style={[styles.detailText, { color: colors.textSecondary }]}>Next Payment: Mar 20, 2025 ($29.99)</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
          <Text style={styles.buttonText}>Manage Subscription</Text>
        </TouchableOpacity>
      </View>

      {/* Payment History Section */}
      <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>💰 Payment History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.transactionCard, { backgroundColor: colors.cardBackground }]}>
            <View>
              <Text style={[styles.transactionDate, { color: colors.textPrimary }]}>{item.date}</Text>
              <Text style={[styles.transactionAmount, { color: colors.textSecondary }]}>{item.amount}</Text>
            </View>
            <Text
              style={[
                styles.transactionStatus,
                { color: item.status === "Success" ? colors.success : item.status === "Pending" ? colors.pending : colors.failed },
              ]}
            >
              {item.status}
            </Text>
          </View>
        )}
      />

      {/* Payment Methods & Invoice Download */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.secondary }]}>
          <Ionicons name="download" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Download Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
          <Ionicons name="card" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Manage Payment Methods</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  planText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detailText: {
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  transactionDate: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionAmount: {
    fontSize: 14,
  },
  transactionStatus: {
    fontSize: 14,
    fontWeight: "bold",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default PaymentDetails;
