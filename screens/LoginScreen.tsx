import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import styles from '../Style/StyleLogin';
import { getUserByEmailAndPassword } from '../src/database';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!emailOrPhone.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const user = await getUserByEmailAndPassword(emailOrPhone.trim(), password.trim());
      if (user) {
        Alert.alert('Success', `Welcome ${user.role}`);
        if (user.role === 'admin') {
          navigation.replace('AdminProduct');
        } else {
          navigation.replace('MainTab');
        }
      } else {
        Alert.alert('Invalid Info', 'Incorrect email or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('System Error', 'Unable to login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please login with your registered account</Text>

      <Text style={styles.label}>Email or Phone Number</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your email or phone number"
          style={styles.input}
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} style={styles.icon} />
        <Text style={styles.socialText}>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }} style={styles.icon} />
        <Text style={styles.socialText}>Sign In with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
        <Text style={styles.backToOnboarding}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
