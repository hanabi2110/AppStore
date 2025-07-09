import React from 'react';
import { TouchableOpacity, Text, Image, Alert } from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  User as GoogleUser,
} from '@react-native-google-signin/google-signin';
import { insertUser, getUserByEmailAndPassword } from '../src/database';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import styles from '../Style/StyleRegister';

GoogleSignin.configure({
  webClientId: '965327573821-80jiqs02mhu5oov03moqgsosebsra268.apps.googleusercontent.com', 
  offlineAccess: false,
});

const GoogleLoginButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      const userInfo = await GoogleSignin.signIn();

      const email = userInfo.user.email;
      const name = userInfo.user.name ?? 'GoogleUser';

      const existingUser = await getUserByEmailAndPassword(email, 'google');

      if (!existingUser) {
        await insertUser(email, 'google', 'user');
      }

      Alert.alert('Success', `Welcome, ${name}!`);
      navigation.replace('MainTab');
    } catch (error: any) {
      console.log('Google login error:', error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'Google Sign-In was cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('In Progress', 'Google Sign-In already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services Error', 'Google Play Services not available');
      } else {
        Alert.alert('Error', 'Google Sign-In failed.');
      }
    }
  };

  return (
    <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
      <Image
        source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
        style={styles.icon}
      />
      <Text style={styles.socialText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleLoginButton;
