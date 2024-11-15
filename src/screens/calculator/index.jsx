//import liraries
import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Colors} from '../../theme/colors';
import {inputVlues} from '../../utils/constants';
import InputButton from '../../components/ui/inputButton';
import Switch from '../../components/calculator/switch';

// create a component
const Calculator = () => {
  const [input, setInput] = useState(0);
  const [switchType, setSwitchType] = useState(0);
  const [operation, setOperation] = useState('');
  const handleInput = useCallback(value => {
    if (value === '=') {
      handleCalculate();
    } else {
      setInput(prevInput => prevInput + value);
    }
  }, []);

  const handleChangeSwitch = useCallback(value => {
    setSwitchType(value);
  }, []);

  const handleCalculate = () => {
    let total = 0;
    try {
      total = eval(input);
      console.log(total)
    } catch (error) {
      console.log(error);
    }
  };
  const total = useMemo(() => handleCalculate(), [input]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.BLACK}}>
      <View style={styles.container}>
        <Switch handleChange={handleChangeSwitch} switchType={switchType} />
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 15,
          }}>
          {total && (
            <Text
              style={{color: Colors.WHITE, fontWeight: '500', fontSize: 60}}>
              {total}
            </Text>
          )}
        </View>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <FlatList
            numColumns={4}
            data={inputVlues}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <InputButton handleInput={handleInput} item={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    padding: 10,
  },
});

//make this component available to the app
export default Calculator;
