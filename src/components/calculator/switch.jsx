
import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {height} from '../../utils/constants';
import {Colors} from '../../theme/colors';


const Switch = ({switchType, handleChange}) => {
 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleChange(0)}
        style={[
          styles.button,
          switchType == 0 ? styles.activeButton : styles.button,
        ]}>
        <Text
          style={[
            styles.title,
            switchType == 0 ? styles.activeTitle : styles.title,
          ]}>
          Calculator
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleChange(1)}
        style={[
          styles.button,
          switchType == 1 ? styles.activeButton : styles.button,
        ]}>
        <Text
          style={[
            styles.title,
            switchType == 1 ? styles.activeTitle : styles.title,
          ]}>
          Converter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height / 18,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: Colors.INPUTBACKCOLOR,
  },
  title: {
    fontSize: 18,
    color: Colors.INPUTCOLOR,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: Colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  activeTitle: {
    color: Colors.WHITE,
  },
});

//make this component available to the app
export default memo(Switch);
