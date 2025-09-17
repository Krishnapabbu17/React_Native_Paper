import s from '@/styles/defaultStyles';
import * as React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';

// quick reusable grid
const TileGrid = ({ items }: { items: string[] }) => (
  <FlatList
    data={items}
    keyExtractor={(uri, i) => uri + i}
    numColumns={2}
    columnWrapperStyle={{ justifyContent: 'space-between' }}
    contentContainerStyle={{ paddingBottom: 24 }}
    renderItem={({ item }) => <Image source={{ uri: item }} style={styles.tile} />}
    showsVerticalScrollIndicator={false}
  />
);

// simple demo image lists (use your own URLs when ready)
const ANIMALS = [
  'https://picsum.photos/seed/animal1/800/800',
  'https://picsum.photos/seed/animal2/800/800',
  'https://picsum.photos/seed/animal3/800/800',
  'https://picsum.photos/seed/animal4/800/800',
  'https://picsum.photos/seed/animal5/800/800',
  'https://picsum.photos/seed/animal6/800/800',
];
const CARS = [
  'https://picsum.photos/seed/car1/800/800',
  'https://picsum.photos/seed/car2/800/800',
  'https://picsum.photos/seed/car3/800/800',
  'https://picsum.photos/seed/car4/800/800',
  'https://picsum.photos/seed/car5/800/800',
  'https://picsum.photos/seed/car6/800/800',
];
const FOOD = [
  'https://picsum.photos/seed/food1/800/800',
  'https://picsum.photos/seed/food2/800/800',
  'https://picsum.photos/seed/food3/800/800',
  'https://picsum.photos/seed/food4/800/800',
  'https://picsum.photos/seed/food5/800/800',
  'https://picsum.photos/seed/food6/800/800',
];
const SPORTS = [
  'https://picsum.photos/seed/sport1/800/800',
  'https://picsum.photos/seed/sport2/800/800',
  'https://picsum.photos/seed/sport3/800/800',
  'https://picsum.photos/seed/sport4/800/800',
  'https://picsum.photos/seed/sport5/800/800',
  'https://picsum.photos/seed/sport6/800/800',
];

const Animals = () => (
  <View style={s.screen}>
    <View style={s.content}>
      <Text style={s.header}>Animals</Text>
      <TileGrid items={ANIMALS} />
    </View>
  </View>
);

const Cars = () => (
  <View style={s.screen}>
    <View style={s.content}>
      <Text style={s.header}>Cars</Text>
      <TileGrid items={CARS} />
    </View>
  </View>
);

const Food = () => (
  <View style={s.screen}>
    <View style={s.content}>
      <Text style={s.header}>Food</Text>
      <TileGrid items={FOOD} />
    </View>
  </View>
);

const Sports = () => (
  <View style={s.screen}>
    <View style={s.content}>
      <Text style={s.header}>Sports</Text>
      <TileGrid items={SPORTS} />
    </View>
  </View>
);

const NewComponent = () => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Animals',        focusedIcon: 'paw' },
    { key: 'albums', title: 'Cars',          focusedIcon: 'car' },
    { key: 'recents', title: 'Food',         focusedIcon: 'food' },
    { key: 'notifications', title: 'Sports', focusedIcon: 'basketball' },
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

const styles = StyleSheet.create({
  tile: {
    width: '48%',
    aspectRatio: 1,     // square tiles
    borderRadius: 12,
    marginBottom: 12,
  },
});

export default newComponent;
