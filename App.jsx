import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import About from './src/clinicApp/screens/About';
import Articles from './src/clinicApp/screens/Articles';
import Contact from './src/clinicApp/screens/Contact';
import LandingPage from './src/clinicApp/screens/LandingPage';
import Services from './src/clinicApp/screens/Services';
const Stack = createDrawerNavigator();
const App = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Articles" component={Articles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
