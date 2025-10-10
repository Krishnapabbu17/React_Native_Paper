
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors';

// Sport Card for each player whcih demonstrates how the output is delivered.
export const SportCard = ({ item }: { item: { imageUrl: string, title: string, description: string } }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 700,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  cardDescription: {
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 5,
  },
});
