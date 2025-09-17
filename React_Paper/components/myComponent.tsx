import s from '@/styles/defaultStyles';
import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';

const Animals = () => (
  <View style={s.screen}>
    <View style={s.content}>
      <Text style={s.header}>Animals</Text>
      <View style={s.card}><Text style={s.paragraph}>Your tracks</Text></View>
    </View>
  </View>
);

const Cars = () => (
  <View style={s.screen}>
    <View style={s.content}>
      <Text style={s.header}>Cars</Text>
    </View>
  </View>
);

const Food = () => (
  <View style={s.screen}>
    <View style={s.content}>
      <Text style={s.header}>Food</Text>
    </View>
  </View>
);

const Sports = () => (
  <View style={s.screen}>
    <View style={s.content}>
      <Text style={s.header}>Sports</Text>
    </View>
  </View>
);

const MyComponent = () => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Animals,
    albums: Cars,
    recents: Food,
    notifications: Sports,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // make pages look good
   //   sceneContainerStyle={{ backgroundColor: '#FAFAFA' }}
      // make bar look clean
      barStyle={{
        height: 64,
        backgroundColor: theme.colors.elevation.level2,
        borderTopWidth: 0.5,
        borderTopColor: theme.colors.outlineVariant,
        elevation: 2,
      }}
    />
  );
};

export default MyComponent;
