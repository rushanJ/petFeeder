import React from 'react'
import { TouchableOpacity, Text ,View} from 'react-native'
import { Actions } from 'react-native-router-flux'
import ScreenContent from "../ScreenContents/NewDevice";
const NewDevice = () => {
   const goToLogin= () => {
      Actions.login()
   }
   return (
      <View  style={{backgroundColor:'#4A546B',height:720}}>
      <ScreenContent/>
      
      </View>
   )
}
export default NewDevice