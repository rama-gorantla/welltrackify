import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const LetsStartScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/wellness.png')} style={styles.image} />
      
      <Text style={styles.logo}>Welltrackify</Text>
      <Text style={styles.tagline}>Your Wellness, Your Way!</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>Get Started!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A021F',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    // marginBottom: 30,
    resizeMode: 'contain',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#C22EFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#C22EFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LetsStartScreen;
