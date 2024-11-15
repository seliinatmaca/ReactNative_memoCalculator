// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import {CALCULATOR, EXAMPLE, USERS} from '../utils/routes';
import MemoizationExample from '../screens/memoizationExample';
import Calculator from '../screens/calculator';
import { Colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTintColor:Colors.WHITE,
      headerStyle:{
        backgroundColor:Colors.BLACK
      }
    }}
    >
      <Stack.Screen name={CALCULATOR} component={Calculator} />
      <Stack.Screen name={EXAMPLE} component={MemoizationExample} />
      <Stack.Screen name={USERS} component={Users} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
