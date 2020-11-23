import React from 'react'
import { TouchableOpacity, Text,View ,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScreenContent from "../ScreenContents/Home";
const Home = () => {
   const goToRegister = () => {
      Actions.register()
   }
   return (
       <View  style={{backgroundColor:'#4A546B'}}>
           <ScrollView>
             <ScreenContent/>
             </ScrollView>
       </View>
   )
}
export default Home