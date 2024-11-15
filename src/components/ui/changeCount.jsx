
import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';


const ChangeCount = ({title, onChange, backgroundColor}) => {
  console.log('Change Count component çalıştı');
  return (
    <TouchableOpacity
      onPress={onChange}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};


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


export default ChangeCount;
