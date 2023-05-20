import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider as ReduxProvider} from 'react-redux';
import {AppDependenciesProvider} from './di';
import {NoteStack} from './navigation/stack';
import store from './redux/store';
import {DarkThemeColorScheme} from './theme/darkThemeColorScheme';
import {LightThemeColorScheme} from './theme/lightThemeColorScheme';

const App = () => {
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
      <AppDependenciesProvider>
        <PaperProvider theme={theme}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <NavigationContainer>
            <NoteStack />
          </NavigationContainer>
        </PaperProvider>
      </AppDependenciesProvider>
    </ReduxProvider>
  );
};

export default App;
