import {StyleSheet, View} from 'react-native';
import React from 'react';
import Context from './Context';
import Elements from './src/Component/Elements';
import {NavigationContainer} from "@react-navigation/native"
import Navigation from './src/navigation/Navigation';


const App = () => {
  return (
    <NavigationContainer>
      <Context>
        <Navigation />
      </Context>
      </NavigationContainer>

  );
};

export default App;
