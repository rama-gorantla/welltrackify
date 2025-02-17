import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const CustomerDetailsOne = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Your journey starts here—let’s begin!</Text>

      
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Age</Text>

      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="male"
          status={gender === "male" ? "checked" : "unchecked"}
          onPress={() => setGender("male")}
          color="#9C27B0"
        />
        <Text style={styles.radioLabel}>Male</Text>

        <RadioButton
          value="female"
          status={gender === "female" ? "checked" : "unchecked"}
          onPress={() => setGender("female")}
          color="#9C27B0"
        />
        <Text style={styles.radioLabel}>Female</Text>

        <RadioButton
          value="other"
          status={gender === "other" ? "checked" : "unchecked"}
          onPress={() => setGender("other")}
          color="#9C27B0"
        />
        <Text style={styles.radioLabel}>Prefer not to say</Text>
      </View>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  stepText: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center", 
    marginBottom: 10,
  },
  progressBar: {
    height: 5,
    backgroundColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressFill: {
    width: "25%",
    height: "100%",
    backgroundColor: "#9C27B0",
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
   textAlign: "center",
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    fontSize: 16,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 10,
    textAlign:"left",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  radioLabel: {
    color: "#fff",
    fontSize: 16,
    marginRight: 20,
  },
  nextButton: {
    backgroundColor: "#9C27B0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  nextText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomerDetailsOne;
