//import liraries
import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/ui/customButtton';
import Count from '../../components/example/count';
import ChangeCount from '../../components/ui/changeCount';

// create a component
const MemoizationExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [count, setCount] = useState(0);
  const calculation = (a, b) => {
    console.log('Toplama fonksiyonu çalıştı');
    return a + b;
  };
  const total = useMemo(() => calculation(a, b), [a, b]);
  const handleChangeCount = useCallback(() => {
    // console.log('count değiştirme çalıştı');
    setCount(count + 1);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Count count={a} text={'A'} />
        <Count count={b} text={'B'} />
      </View>
      <Count count={total} text={'Toplam'} />
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 40}}>Count:{count}</Text>

        <CustomButton
          onPress={() => setA(a + 1)}
          title={'A"yı Artır'}
          backgroundColor={Colors.RED}
        />
        <CustomButton
          onPress={() => setB(b + 1)}
          title={'B"yı Artır'}
          backgroundColor={Colors.ORANGE}
        />
        <ChangeCount
          onChange={handleChangeCount}
          title={'Count değeri Artır'}
          backgroundColor={Colors.BLUE}
        />
        {/* <CustomButton title={'Azalt'} backgroundColor={Colors.RED} /> */}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 5,
  },
});

//make this component available to the app
export default MemoizationExample;
