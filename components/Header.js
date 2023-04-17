import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer); // this is taking data from root reducer
  const [cartItems, setCartitems] = useState(0);

  useEffect(() => {
    setCartitems(cartData.length);
  }, [cartData]);

  return (
    <View style={StyleSheet.container}>
      <Text
        style={{
          margin: 20,
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'skyblue',
        }}>
        <View
          style={{
            backgroundColor: 'yellow',
            borderRadius: 10,
            height: 40,
            width: 40,
          }}>
          <Text style={{fontSize: 30, marginLeft: 3.5}}> {cartItems}</Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Header;
