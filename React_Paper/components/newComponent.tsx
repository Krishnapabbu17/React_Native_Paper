import s from '@/styles/defaultStyles';
import * as React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';

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


const ANIMALS = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEf2x48OO7avhX3sDnPcxx-2UelTwMABUWg&s',
  'https://www.science.org/do/10.1126/science.zjv23mz/abs/_20214_on_adolesence_animals_virginia.jpg',
  'https://thumbs.dreamstime.com/b/regal-horse-galloping-misty-meadow-dawn-exudes-aura-freedom-refinement-set-against-serene-backdrop-398466658.jpg',
  'https://potterparkzoo.org/wp-content/uploads/2017/01/Kota-Lion-2023-1-640x480.jpg',
  'https://cdn.creatureandcoagency.com/uploads/2014/09/autumn-animals-wolf.jpg',
  'https://shop.wwf.ca/cdn/shop/files/giant-panda-WW230176.jpg?v=1694540662&width=1024',
];
const CARS = [
  'https://imgd.aeplcdn.com/370x208/n/cw/ec/139133/aura-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80',
  'https://hips.hearstapps.com/hmg-prod/images/2025-honda-cr-v-hybrid-awd-sport-touring-102-679407cb80051.jpg?crop=0.702xw:0.590xh;0.0529xw,0.341xh&resize=2048:*',
  'https://hips.hearstapps.com/hmg-prod/images/2019-dodge-challenger-srt-hellcat-redeye-comparison-104-1581425446.jpg?crop=0.658xw:0.555xh;0.0896xw,0.293xh&resize=1200:*',
  'https://hips.hearstapps.com/hmg-prod/images/240314-01-gt-r-my25-009-65f465d1cdbd1.jpg',
  'https://media.wired.com/photos/5a0e6fe27d6fd0312d8bba41/16:9/w_1978,h_1113,c_limit/Roadster_Hero.jpg',
  'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/04/cars_3_characters-1.jpg',
];
const FOOD = [
  'https://hips.hearstapps.com/hmg-prod/images/chicken-curry-index-65a1629f3c1e7.jpg?crop=0.8885082084225553xw:1xh;center,top&resize=1200:*',
  'https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4',
  'https://thegirlinspired.com/wp-content/uploads/2024/11/southern-fried-chicken-recipe-card.jpg',
  'https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg',
  'https://sausagemaker.com/wp-content/uploads/Homemade-French-Fries_8.jpg',
  'https://www.modernhoney.com/wp-content/uploads/2024/01/Homemade-Chicken-Ramen-1-crop-scaled.jpg',
];
const SPORTS = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/250px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg',
  'https://i0.wp.com/sportytell.com/wp-content/uploads/2018/11/Ronaldo-Champions-league-Manchester-United.jpg?zoom=1.25&w=680&ssl=1',
  'https://media.cnn.com/api/v1/images/stellar/prod/231122100352-01-tom-brady-file-101623.jpg?c=16x9&q=h_833,w_1480,c_fill',
  'https://www.investopedia.com/thmb/cGLTSgopZFDs_WUnDPjxfIsEnfw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1863206916-67a4cf0a1f5c4598b6e7fda26ef7e004.jpg',
  'https://m.media-amazon.com/images/M/MV5BZGYwYTNjNTAtZTFhNS00MDFlLThmZjUtN2I4ODQ5ZjI5MDU3XkEyXkFqcGc@._V1_.jpg',
  'https://cdn.shopify.com/s/files/1/0878/2614/files/barry-bonds-edit-1.jpg?7859236886406504759',
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
    { key: 'animals', title: 'Animals',        focusedIcon: 'paw' },
    { key: 'cars', title: 'Cars',          focusedIcon: 'car' },
    { key: 'food', title: 'Food',         focusedIcon: 'food' },
    { key: 'sports', title: 'Sports', focusedIcon: 'basketball' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    animals: Animals,
    cars: Cars,
    food: Food,
    sports: Sports,
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

export default NewComponent;
