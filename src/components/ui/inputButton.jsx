//import liraries
import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {width} from '../../utils/constants';
import {Colors} from '../../theme/colors';

// create a component
const InputButton = ({item, handleInput}) => {
  // console.log(`${item.title}`);
  return (
    <TouchableOpacity
      onPress={() => handleInput(item.value)}
      style={[
        styles.container,
        {
          backgroundColor:
            typeof item.value == 'string' ? Colors.BLUE : Colors.INPUTBACKCOLOR,
        },
      ]}>
      <Text style={styles.value}>{item.title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 4 - 15,
    padding: 10,
    height: width / 4 - 10,
    margin: 3,
    borderRadius: 5,
  },
  value: {
    fontSize: 28,
    color: Colors.INPUTCOLOR,
    fontWeight: '500',
  },
});

//make this component available to the app
export default memo(InputButton);
