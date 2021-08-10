import React from 'react';
import {Text, View, Pressable } from 'react-native';

import styles from './styles';


const StyledButton = (props) => {

    const {type, content, onPress} = props;

    const backgroundcolor = type === 'primary' ? 'gray' : 'white';
    const textcolor = type === 'primary' ? 'white' : 'black';

  return (
    <View style={styles.container}>
        <Pressable
        style={[styles.button, {backgroundColor: backgroundcolor}]}
        onPress={() => onPress()}>
            <Text style={[styles.text], {color: textcolor} }>{content}</Text>
        </Pressable>
    </View>
  );
};

export default StyledButton;