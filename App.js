import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screens/StartGame';

 const App = () =>{
  return (
    <View style={styles.container}>
      <Header title="GESS MY NUMBER" />
      <StartGame />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
