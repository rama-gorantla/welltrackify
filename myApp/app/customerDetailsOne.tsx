import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useRouter } from "expo-router";


const CustomerDetailsOne = () => {
  const [name, setName] = useState(''); 
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  // Function to allow only numeric values
  const handleNumericInput = (text: string, setter: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: any): void; }) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setter(numericText);
  };

    const router = useRouter();
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Your journey starts here—let’s begin!</Text>

        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        {/* Age Input */}
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => handleNumericInput(text, setAge)}
          maxLength={3}
        />

        {/* Gender Selection */}
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

        {/* Height Input */}
        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your height"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => handleNumericInput(text, setHeight)}
          maxLength={3}
        />

        {/* Weight Input */}
        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your weight"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => handleNumericInput(text, setWeight)}
          maxLength={3}
        />

        {/* Continue Button */}
        <TouchableOpacity style={styles.button}
                onPress={() => router.push("/letsStartScreen")}
>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#0A021F',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1E102F',
    color: '#fff',
    fontSize: 16,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#555',
  },
  label: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioLabel: {
    color: '#fff',
    fontSize: 16,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#9C27B0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomerDetailsOne;
