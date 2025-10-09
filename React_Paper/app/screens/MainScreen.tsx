// app/screens/MainScreen.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SportCard } from '../components/SportCard';
import { baseballData, basketballData, footballData, soccerData } from '../data/sportsData';
import { COLORS } from '../styles/colors';
import styles from '../styles/defaultStyles';

export const MainScreen = ({ userName }: { userName: string }) => {
  const [activeTab, setActiveTab] = useState('Basketball');

  const renderContent = () => {
    let dataToShow = basketballData;
    if (activeTab === 'Football') dataToShow = footballData;
    if (activeTab === 'Soccer') dataToShow = soccerData;
    if (activeTab === 'Baseball') dataToShow = baseballData;

    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        {dataToShow.map(item => <SportCard key={item.id} item={item} />)}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{activeTab}</Text>
        <Text style={styles.headerSubtitle}>Welcome, {userName}!</Text>
      </View>

      {renderContent()}

      <View style={styles.navBar}>
        {['Basketball', 'Football', 'Soccer', 'Baseball'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.navButton}>
            <Text style={[styles.navText, activeTab === tab && styles.navTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};