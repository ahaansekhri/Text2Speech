import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
   

render(){
  return (
    <View style={styles.container}>
     

      <TextInput
            style={styles.input}
            placeholder="type text to speech here"
            onChangeText={(text) => {
              this.setState({ text: text }); 
            }}
          />
           <Text>{this.state.text}</Text>

          
           <TouchableOpacity style={styles.button} onPress={()=>{
           
              var thingToSay = this.state.text;
                console.log(thingToSay);
                Speech.speak(thingToSay);
                 
              
           }}>
            <Text style={styles.text}>
              Go 
            </Text>
          </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 2,
    width: 200,
  },

  text:{
    textAlign: "center",
    color: "white",
  },


  button:{
    width:50,
    height:30,
    padding: 10,
    margin: 10,
    backgroundColor:"blue",
    borderRadius:10,

  },

});
