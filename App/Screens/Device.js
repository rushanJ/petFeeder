import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScreenContent from "../ScreenContents/Device";
const Home = () => {
   const goToRegister = () => {
      Actions.register()
   }
   return (
       <View>
             <ScreenContent/>
       </View>
   )
}
export default Home