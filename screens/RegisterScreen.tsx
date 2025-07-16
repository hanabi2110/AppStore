import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, Alert,
} from 'react-native';
import styles from '../Style/StyleRegister';
import { insertUser } from '../src/database';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import GoogleLoginButton from './GoogleLoginButton';
import Icon from 'react-native-vector-icons/Feather';

const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreateAccount = async () => {
    if (!username || !emailOrPhone || !password || !confirmPassword) {
      Alert.alert('Warning', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Warning', 'Passwords do not match.');
      return;
    }

    try {
      await insertUser(emailOrPhone, password, 'user');
      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error: any) {
      Alert.alert('Error', 'Account already exists or failed to create.');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Start learning with create your account!</Text>

      <Text style={styles.label}>Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Create your username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <Text style={styles.label}>Email or Phone Number</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your email or phone number"
          style={styles.input}
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
        />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Create your password"
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Re-enter your password"
          secureTextEntry={!showConfirmPassword}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or using other method</Text>

      <GoogleLoginButton />

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }}
          style={styles.icon}
        />
        <Text style={styles.socialText}>Sign Up with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginRedirect}>
        <Text style={styles.loginRedirectText}>
          Already have an account? <Text style={styles.loginRedirectLink}>Log in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;