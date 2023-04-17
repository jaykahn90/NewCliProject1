import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from './redux/action';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    console.warn(item);
  };

  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach(element => {
        if (element.name === item.name) {
          setIsAdded(true);
        }
      });
    }
  }, [cartItems]);
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
        marginBottom: 75,
      }}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
      {isAdded ? (
        <Button
          title="Remove from Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
