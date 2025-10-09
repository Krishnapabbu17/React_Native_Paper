// app/screens/LoginScreen.tsx
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { COLORS } from '../styles/colors';
import styles from '../styles/defaultStyles';


export const LoginScreen = ({ onLoginSuccess }: { onLoginSuccess: (name: string) => void }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (name.trim().length > 2) {
      onLoginSuccess(name.trim());
    } else {
      setError('Please enter a name.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.loginContainer}>
      <Text style={styles.title}>Welcome to SportsApp</Text>
      <Text style={styles.subtitle}>Please enter your name to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={COLORS.textLight}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};