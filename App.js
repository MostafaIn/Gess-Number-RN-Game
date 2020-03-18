import React, { useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

 const App = () =>{
   const [userNumber, setuserNumber] = useState();
   const [guessRounds, setguessRounds] = useState(0);

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

  return (
    <View style={styles.container}>
      <Header title="GESS MY NUMBER" />
      { content }
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
