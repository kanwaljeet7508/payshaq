import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: '',
      confirmpassword: ''

   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   handleConfirmPassword = (text) => {
    this.setState({ password: text })
 }

   login = (email, pass, confirmPass) => {
      alert('email: ' + email + ' password: ' + pass + 'confirmpass: ' + confirmPass)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "confirm Password"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handleConfirmPassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password, this.state.confirmpassword)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.facebookButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password, this.state.confirmpassword)
               }>
               <Text style = {styles.facebookButtonText}> facebook </Text>
            </TouchableOpacity>

         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 10,
      height: 50,
      borderColor: 'red',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      width: 80,
   },
   submitButtonText:{
      color: 'white'
   },
   facebookButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      width: 80,
   },
   facebookButtonText:{
      color: 'white'
   }
})