//import liraries
import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const Count = ({count, text}) => {
//   console.log(`${text}`, count);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>
        {text} : {count}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default memo(Count);
// export default Count;
