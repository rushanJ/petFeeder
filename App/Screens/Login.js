import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScreenContent from "../ScreenContents/Login";
const Login = () => {
   const goToRegister = () => {
      Actions.register()
   }
   return (
       <View>
       <ScreenContent/>
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToRegister}>
         <Text>Need An Account?</Text>
      </TouchableOpacity>
      </View>
   )
}
export default Login