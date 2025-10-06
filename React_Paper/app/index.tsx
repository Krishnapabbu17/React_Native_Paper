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
import { UserData } from './types/types';
import { NavigateFunction } from './types/types';
import { COLORS } from './styles/colors';
import { styles } from './styles/styles';
import GatekeeperScreen from './screens/GatekeeperScreen';
import SportDetailScreen from './screens/SportDetailScreen';


const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<string>('Gatekeeper');
    const [screenData, setScreenData] = useState<UserData | {}>({});


    useEffect(() => {
        console.log(`[EFFECT] App transitioning to screen: ${currentScreen}`);
        if (Object.keys(screenData).length > 0) {
            console.log('[EFFECT] Data received:', screenData);
        }
    }, [currentScreen, screenData]);


    const navigate: NavigateFunction = (screenName, data = {}) => {
        setScreenData(data);
        setCurrentScreen(screenName);
    };


    const renderScreen = () => {
        switch (currentScreen) {
            case 'Soccer':
            case 'Basketball':
            case 'Football':
            case 'Baseball':
                return (
                    <SportDetailScreen
                        sport={currentScreen}
                        userData={screenData as UserData}
                        navigate={navigate}
                    />
                );
            case 'Gatekeeper':
            default:
                return <GatekeeperScreen navigate={navigate} />;
        }
    };


    return (
        <View style={styles.appContainer}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.secondary} />
            {renderScreen()}
        </View>
    );
};


export default App;

