//import liraries
import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const CustomButton = props => {
    // console.log("Button component çalıştı")
  const {title, backgroundColor} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.WHITE,
  },
});

//make this component available to the app
export default memo(CustomButton);
