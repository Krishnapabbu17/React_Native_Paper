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


import {PlayerStat} from "@/app/types/types"
import {statCardStyles} from "@/app/styles/styles"


const StatCard: React.FC<{ stat: PlayerStat }> = ({ stat }) => (
    <View style={statCardStyles.card}>
        <Text style={statCardStyles.icon}>{stat.icon}</Text>
        <View style={statCardStyles.info}>
            <Text style={statCardStyles.metric}>{stat.metric}</Text>
            <Text style={statCardStyles.value}>{stat.value}</Text>
        </View>
    </View>
);


export default StatCard;

