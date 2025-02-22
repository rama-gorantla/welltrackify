import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, Feather } from '@expo/vector-icons';

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Enter a valid email address");
      return false;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters");
      return false;
    }

    const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      setErrorMessage("Password must include letters, numbers, and special characters");
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleSignUp = () => {
    // if (validateForm()) {
      router.push('/customerDetailsOne');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Welltrackify</Text>
      <Text style={styles.tagline}>Your Wellness, Your Way.</Text>

      {/* Welcome Text */}
      <Text style={styles.title}>
        Create an <Text style={styles.highlight}>Account</Text>
      </Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#aaa" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ddd"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#aaa" style={styles.inputIcon} />
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

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#aaa" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ddd"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Feather name={confirmPasswordVisible ? "eye" : "eye-off"} size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Error Message */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Already Have an Account - Log In */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/signIn')}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A021F', // Dark background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  signUpButton: {
    backgroundColor: '#C22EFF',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 15,
  },
  signUpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  loginText: {
    color: '#aaa',
    fontSize: 18,
  },
  loginLink: {
    color: '#C22EFF',
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default SignUp;
