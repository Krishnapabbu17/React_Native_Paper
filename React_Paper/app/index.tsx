// app/App.tsx
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { LoginScreen } from './screens/LoginScreen';
import { MainScreen } from './screens/MainScreen';
import { COLORS } from './styles/colors';

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
