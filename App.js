import React from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {
  const products = [
    {
      name: 'Samsung mobile',
      color: 'white',
      price: 1200,
      image: 'https://www.iconpacks.net/icons/1/free-icon-mobile-phone-709.png',
    },
    {
      name: 'Apple iphone',
      color: 'space grey',
      price: 1500,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636.png',
    },
    {
      name: 'Sony mobile',
      color: 'green',
      price: 900,
      image: 'https://www.iconpacks.net/icons/1/free-icon-mobile-phone-980.png',
    },
  ];

  return (
    <View style={StyleSheet.container}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product key={item.name} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
