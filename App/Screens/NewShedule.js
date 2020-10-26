import React from 'react'
import { TouchableOpacity, Text ,View} from 'react-native'
import { Actions } from 'react-native-router-flux'
import ScreenContent from "../ScreenContents/NewShedule";
const NewShedulee = () => {
   const goToLogin= () => {
      Actions.login()
   }
   return (
      <View>
      <ScreenContent/>
      
      </View>
   )
}
export default NewShedulee