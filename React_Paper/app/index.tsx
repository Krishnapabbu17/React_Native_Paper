
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { LoginScreen } from './screens/LoginScreen';
import { MainScreen } from './screens/MainScreen';
import { COLORS } from './styles/colors';

// Learned how to use SafeAreaView from ChatGPT and implemented into my
// code to paste it into the basic output.
export default function App() {
  const [userName, setUserName] = useState<string | null>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      {userName === null ? (
        <LoginScreen onLoginSuccess={setUserName} />
      ) : (
        <MainScreen userName={userName} />
      )}
    </SafeAreaView>
  );
}
