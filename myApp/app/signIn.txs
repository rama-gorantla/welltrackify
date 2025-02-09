import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, Feather } from '@expo/vector-icons';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!email || !password) {
      setErrorMessage("Both email and password are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Enter a valid email address");
      return false;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleSignIn = () => {
    if (validateForm()) {
    //   router.push('/home');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.innerContainer}>
            <Text style={styles.logo}>Welltrackify</Text>
            <Text style={styles.tagline}>Your Wellness, Your Way.</Text>

            {/* Welcome Text */}
            <Text style={styles.title}>
              Welcome <Text style={styles.highlight}>Back!</Text>
            </Text>

            {/* Email Input */}
            <View style={styles.inputContainer}>
              <FontAwesome name="user" size={20} color="#aaa" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#ddd"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <FontAwesome name="lock" size={20} color="#aaa" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#ddd"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <Feather name={passwordVisible ? "eye" : "eye-off"} size={20} color="#aaa" />
              </TouchableOpacity>
            </View>

            {/* Error Message */}
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
              <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>

            {/* Forgot Password */}
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/signUp')}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A021F', // Dark background color
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
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
    marginBottom: 30,
  },
  highlight: {
    color: '#C22EFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E102F',
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '100%',
    height: 50,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#C22EFF',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 15,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginLeft: 10,
  },
  forgotPassword: {
    color: '#aaa',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  signupText: {
    color: '#aaa',
    fontSize: 18,
  },
  signupLink: {
    color: '#C22EFF',
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default SignIn;
