
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors';
import { SportCard } from '../components/SportCard';
import { basketballData, footballData, soccerData, baseballData } from '../data/sportsData';

// Used a custom bottom tab navigation system that looks and works smoother
// Learned and implemented from Stack-Overflow.
export const MainScreen = ({ userName }: { userName: string }) => {
  const [activeTab, setActiveTab] = useState('Basketball');


// Used a custom bottom tab navigation system that looks and works smoother
// Learned and implemented from Stack-Overflow.
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

// Used a custom bottom tab navigation system that looks and works smoother
// Learned and implemented from Stack-Overflow.
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

const styles = StyleSheet.create({
  container: { flex: 5, backgroundColor: COLORS.background },
  header: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: COLORS.primary },
  headerSubtitle: { fontSize: 16, color: COLORS.textLight, marginTop: 4 },
  listContainer: { padding: 16 },
  navBar: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navButton: { flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' },
  navText: { fontSize: 14, color: COLORS.textLight },
  navTextActive: { color: COLORS.secondary, fontWeight: 'bold' },
});
