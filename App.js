import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import CarList from './components/carsList';

export default function App() {
  return (
    <View style={styles.container}>

    <CarList></CarList>

      {<StatusBar style="auto" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
