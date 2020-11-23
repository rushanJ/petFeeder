import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
 
export default class App extends React.Component {
  state = {
    appIsReady: false,
  };
 
  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }
 
  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  }
 
  render() {
    if (!this.state.appIsReady) {
      return null;
    }
 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SplashScreen Demo! 👋</Text>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aabbcc',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});