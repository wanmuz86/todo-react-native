import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Detail({navigation}) {
    let item = navigation.getParam('item')
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
