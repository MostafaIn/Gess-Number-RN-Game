import React, { useState} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

const fetchFonts = () =>{
  return Font.loadAsync({
    'inknutAntiqua-Regular': require('./assets/fonts/InknutAntiqua-Regular.ttf'),
    'indieFlower-Regular' : require('./assets/fonts/IndieFlower-Regular.ttf')
  })
}


 const App = () =>{
   const [userNumber, setuserNumber] = useState();
   const [guessRounds, setguessRounds] = useState(0);
   const [fontLoaded, setFontLoaded] = useState(false);

   if(!fontLoaded){
     return(
       <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
          onError={(err) => console.log(err)}
       />
     )
   }

   const configureNewGameHandler = () =>{
      setguessRounds(0)
      setuserNumber(null)
   };
   
   const startGameHandler = selectedNumber =>{
     setuserNumber(selectedNumber)
   };

   const gameOverHandler = numOfRnd =>{
      setguessRounds(numOfRnd)
   };

   let content = <StartGame onStartGame={startGameHandler} />;
   if(userNumber && guessRounds <= 0){
     content = <GameScreen userChoice ={userNumber} onGameOver={gameOverHandler} />;
   }else if( guessRounds > 0){
     content = <GameOver rndNumber={guessRounds} usrNumber={userNumber} onRestart={configureNewGameHandler} />
   }
  //  console.log('font',fontLoaded);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="GESS MY NUMBER" />
      { content }
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
