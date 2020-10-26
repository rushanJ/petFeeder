import React from 'react'
import { TouchableOpacity, Text ,View} from 'react-native'
import { Actions } from 'react-native-router-flux'
import ScreenContent from "../ScreenContents/Register";
const Register = () => {
   const goToLogin= () => {
      Actions.login()
   }
   return (
      <View>
      <ScreenContent/>
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToLogin}>
         <Text>Already Have An Account?</Text>
      </TouchableOpacity>
      </View>
   )
}
export default Register