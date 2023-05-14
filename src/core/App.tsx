import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NoteStack from '../features/note/navigation/NoteStack';
import {DarkThemeColorScheme} from './theme/darkThemeColorScheme';
import {LightThemeColorScheme} from './theme/lightThemeColorScheme';
import {Provider as ReduxProvider} from 'react-redux';
import store from './redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const colorScheme = isDarkMode ? DarkThemeColorScheme : LightThemeColorScheme;

  const theme = {
    ...DefaultTheme,
    colors: colorScheme,
  };

  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          <NoteStack />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}

export default App;
