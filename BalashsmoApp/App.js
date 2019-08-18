
import {Navigation} from 'react-native-navigation'
import Login from './src/Login';
import SplashScreen from './src/SplashScreen'


Navigation.registerComponent("hello.splashscreen", ()=> SplashScreen);


Navigation.startSingleScreenApp({
  screen :{
    screen:"hello.splashscreen",
    title:" "
  }
})

