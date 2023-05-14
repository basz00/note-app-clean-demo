import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OverviewScreen from '../screens/OverviewScreen';

const Stack = createNativeStackNavigator();

const NoteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NoteOverview" component={OverviewScreen} />
    </Stack.Navigator>
  );
};

export default NoteStack;
