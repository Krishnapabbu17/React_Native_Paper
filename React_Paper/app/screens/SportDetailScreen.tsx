import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
    StatusBar,
    ListRenderItem,
} from 'react-native';
import {Picker}  from '@react-native-picker/picker';
import {styles} from "@/app/styles/styles"
import { UserData } from '../types/types';
import { COLORS } from '../styles/colors';
import { GatekeeperProps } from '@/app/types/types'


const SPORTS = [
    { key: 'Soccer', label: '⚽ Soccer' },
    { key: 'Basketball', label: '🏀 Basketball' },
    { key: 'Football', label: '🏈 Football' },
    { key: 'Baseball', label: '⚾ Baseball' },
];


const GatekeeperScreen: React.FC<GatekeeperProps> = ({ navigate }) => {
    const [selectedSport, setSelectedSport] = useState<string>(SPORTS[0].key);
    const [name, setName] = useState<string>('');
    const [jerseyNumber, setJerseyNumber] = useState<string>('');
    const [favoritePosition, setFavoritePosition] = useState<string>('');


    const isFormValid: boolean = name.trim() !== '' && jerseyNumber.trim() !== '';


    const handleEnter = () => {
        if (isFormValid) {
            const userData: UserData = {
                name,
                jerseyNumber,
                favoritePosition,
                sport: selectedSport,
            };
            navigate(selectedSport, userData);
        } else {
            console.error('Error: Please fill out Name and Jersey Number.');
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.gatekeeperScrollContainer} style={{ flex: 1, backgroundColor: COLORS.background }}>
            <Text style={[styles.title, styles.gatekeeperTitle]}>
                Sports Tracker Entry
            </Text>


            <View style={styles.inputGroup}>
                <Text style={styles.label}>Select Sport:</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedSport}
                        onValueChange={(itemValue: string) => setSelectedSport(itemValue)}
                        style={styles.picker}
                        itemStyle={{ height: 50 }}
                    >
                        {SPORTS.map(sport => (
                            <Picker.Item key={sport.key} label={sport.label} value={sport.key} />
                        ))}
                    </Picker>
                </View>
            </View>


            <View style={styles.inputGroup}>
                <Text style={styles.label}>Player Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Enter full name"
                    placeholderTextColor={COLORS.placeholder}
                />
            </View>


            <View style={styles.inputGroup}>
                <Text style={styles.label}>Jersey Number:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setJerseyNumber}
                    value={jerseyNumber}
                    placeholder="e.g., 10"
                    keyboardType="numeric"
                    placeholderTextColor={COLORS.placeholder}
                />
            </View>


            <View style={styles.inputGroup}>
                <Text style={styles.label}>Favorite Position (Optional):</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setFavoritePosition}
                    value={favoritePosition}
                    placeholder="e.g., Center Midfielder"
                    placeholderTextColor={COLORS.placeholder}
                />
            </View>


            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: isFormValid ? COLORS.primary : COLORS.placeholder },
                    !isFormValid && { opacity: 0.6 }
                ]}
                onPress={handleEnter}
                disabled={!isFormValid}
            >
                <Text style={styles.buttonText}>
                    Go to {selectedSport} Tracker
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


export default GatekeeperScreen;


