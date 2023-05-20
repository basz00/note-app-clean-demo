import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  DetailsScreen,
  OverviewScreen,
} from '../../../features/note/presentation/screens';
import {NoteStackParamList} from '../paramList';

const Stack = createNativeStackNavigator<NoteStackParamList>();

const NoteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Overview" component={OverviewScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default NoteStack;
