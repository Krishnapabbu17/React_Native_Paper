import { COLORS } from './colors';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, StatusBar, ListRenderItem } from 'react-native';
export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: StatusBar.currentHeight,
    },
    card: {
        backgroundColor: COLORS.textLight,
        borderRadius: 12,
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 15,
        shadowColor: COLORS.secondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.textDark,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textLight,
    },


    gatekeeperScrollContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'stretch',
    },
    gatekeeperTitle: {
        color: COLORS.primary,
        fontSize: 36,
        marginBottom: 30,
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textDark,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: COLORS.textLight,
        color: COLORS.textDark,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        backgroundColor: COLORS.textLight,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
        color: COLORS.textDark,
    },


    detailHeader: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: COLORS.secondary,
        marginBottom: 20,
    },
    detailIcon: {
        fontSize: 60,
        marginBottom: 10,
    },
    detailTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.textLight,
    },
    playerHeader: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.primary,
        marginBottom: 10,
    },
    playerDetail: {
        fontSize: 16,
        color: COLORS.textDark,
        lineHeight: 24,
    },
    descriptionText: {
        fontSize: 16,
        color: COLORS.textDark,
    },
    dataHeader: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.textDark,
        marginHorizontal: 20,
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: '#E5E7EB',
        padding: 10,
        borderRadius: 8,
    },
});


export const statCardStyles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.textLight,
        borderRadius: 12,
        padding: 16,
        marginVertical: 4,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        borderLeftWidth: 5,
        borderLeftColor: COLORS.primary,
    },
    icon: {
        fontSize: 30,
        marginRight: 15,
        backgroundColor: '#E0FBEF',
        padding: 8,
        borderRadius: 50,
        overflow: 'hidden',
    },
    info: {
        flex: 1,
    },
    metric: {
        fontSize: 14,
        color: COLORS.secondary,
        fontWeight: '500',
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
});

