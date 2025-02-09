import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const MainScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/images/glitt')} // Ensure this image is in assets
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Welcome Text */}
        <Text style={styles.logo}>Welltrackify</Text>
        <Text style={styles.tagline}>Your Wellness, Your Way.</Text>
        <Text style={styles.title}>
          Let's Get <Text style={styles.highlight}>Started!</Text>
        </Text>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/signIn')}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>

        {/* Sign In Options */}
        <Text style={styles.orText}>OR SIGN IN WITH</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <FontAwesome name="envelope" size={24} color="#C22EFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <FontAwesome name="mobile" size={30} color="#C22EFF" />
          </TouchableOpacity>
        </View>

        {/* "Know More About Welltrackify" Route */}
        <TouchableOpacity onPress={() => router.push('/signUp')}>
          <Text style={styles.knowMoreText}>Know More About Welltrackify</Text>
        </TouchableOpacity>

        {/* Divider Line for Sign Up Section */}
        <View style={styles.divider} />

        {/* Sign Up Link */}
        <TouchableOpacity style={styles.signupWrapper} onPress={() => router.push('/signUp')}>
          <Text style={styles.signupText}>DIDN'T HAVE ACCOUNT?</Text>
          <Text style={styles.signupNow}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay effect
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 16,
    color: '#C22EFF',
    textAlign: 'center',
    marginBottom: 20,
  },  
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  highlight: {
    color: '#C22EFF', // Gradient color effect for "Started!"
  },
  signInButton: {
    backgroundColor: '#C22EFF',
    paddingVertical: 10,
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  iconWrapper: {
    padding: 15,
    borderWidth: 2,
    borderColor: '#C22EFF',
    borderRadius: 50,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knowMoreText: {
    color: '#007BFF',
    marginTop: 20,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  /* Divider line for sign-up section */
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#aaa', // Line color
    // top: 160,
    // marginBottom: 160,
    position:'absolute',
    bottom: 160,
  },
  signupWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  signupText: {
    color: '#aaa',
    fontSize: 14,
    position:'absolute',
    top: 100,
  },
  signupNow: {
    color: '#C22EFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    position:'absolute',
    top: 124,
  },
});

export default MainScreen;
