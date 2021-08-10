import React from 'react';
import {Text, View, ImageBackground } from 'react-native';

import styles from './styles';
import StyledButton from '../Button';

const CarItem = (props) => {
  return (
    <View>
      <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/images/ModelS.jpeg')} 
        style={styles.image}
        />
        
        <View style={styles.titles}>
          <Text style={styles.title}>Modal S</Text>
          <Text style={styles.subtitle}>Starting at $65.000</Text>
        </View>

        <StyledButton type="primary" 
        content={"Custom Order"} 
        onPress={() => {
          console.warn('Custom Order was pressed')}}/>

        <StyledButton type="secondary" 
        content={"Existing Inventory"} 
        onPress={() => {
          console.warn('Existing Inventory was pressed')}}/>

      </View>
    </View>
  );
};

export default CarItem;