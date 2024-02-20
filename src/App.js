import { NavigationContainer } from '@react-navigation/native';

import AllStack from './navigation/stack/AllStack'
import OnboardingScreen from './screens/OnBoardScreen';
import Dummy from '../Dummy';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {


    setTimeout(() => {
      SplashScreen.hide();
    },);

  }, []);

  return (

    // <OnboardingScreen />
    <NavigationContainer>
      <AllStack />
    </NavigationContainer>

  );
}
export default App;
