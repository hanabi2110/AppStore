import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, Alert,
} from 'react-native';
import styles from '../Style/StyleRegister';
import { insertUser } from '../src/database';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = async () => {
    if (!username || !emailOrPhone || !password) {
      Alert.alert('Warning', 'Please fill in all fields.');
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
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or using other method</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
          style={styles.icon}
        />
        <Text style={styles.socialText}>Sign Up with Google</Text>
      </TouchableOpacity>

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
