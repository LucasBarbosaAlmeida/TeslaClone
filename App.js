import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import CarItem from './components/carItem';

export default function App() {
  return (
    <View style={styles.container}>

      <CarItem name={"Model X"} 
      tagline={"Starting from $99.500"}
      image={require('./assets/images/ModelX.jpeg')}/>

      <CarItem name={"Model 3"} 
      tagline={"Starting from $65.500"}
      image={require('./assets/images/Model3.jpeg')}/>

      {<StatusBar style="auto" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
