import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
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
        0
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
