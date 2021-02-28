import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {Button,Icon} from 'native-base'

export default Login =({navigation})=>{
    //..
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errortext, setErrortext] = useState("");


  
    
      
      
          // If server response message same as Data Matched
         // if (user) navigation.replace("HomeScreen");
       
    async function LoginUser(){
        setErrortext("");
      if (!email) {
        alert("Please fill Email");
        return;
      }
      if (!password) {
        alert("Please fill Password");
        return;
      }
        await firebase
        
        .auth()
        .signInWithEmailAndPassword(email.trim(),password)
        .then((user)=>{
            alert('WELCOME')
            if (user) navigation.navigate("Studentdata");
            
        })
        .catch((error) => {
            console.log(error);
            if (error.code === "auth/invalid-email")
              setErrortext(error.message);
            else if (error.code === "auth/user-not-found")
              setErrortext("No User Found");
            else {
              setErrortext(
                "Please check your email id or password"
              );
            }
          });
        

    }


    return(
        
        <View style={styles.container}>
           <View style={{ alignItems: "center" }}>
              <Image
                source={require("../Image/logo.jpg")}
                style={{
                  width: "40%",
                  height: 100,
                  resizeMode: "contain",
                  margin:5,
                }}
              />
            </View>
            <View style={{
                padding:10,
                
            }}>
            </View>
            

            <View style={styles.forms}>
                <TextInput
                placeholder={'Email'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setEmail(text)}
                value={email}
                style={styles.textinput}>

                </TextInput>

                <TextInput
                placeholder={'Password'}
                secureTextEntry
                inlineImageLeft={"account"}
                keyboardType="default"
                // ...
                onChangeText={(text)=>setPassword(text)}
                value={password}

                style={styles.textinput}>
                </TextInput>
            </View>

            {/* //.. */}
            <View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>
                {" "}
                {errortext}{" "}
              </Text>
              ) : null}
            </View>

           <Button 
           onPress={()=>LoginUser()}
           style={{
               borderRadius:20,
               padding:50,
               marginTop:10,
               justifyContent:'center',
               backgroundColor:'#48D1CC'
           }}>
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:20,
                  
               }}>
                   SIGN IN
               </Text>

           </Button>
           <Text style={{
                   
                   
                   fontSize:20}}>Don't have account?
           <  Text
                onPress={()=>navigation.navigate('Register')}
                style={styles.login}>
                <Text style={styles.textstyle}>
                        Sign Up
                    </Text>
                </Text>
                </Text>
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        padding:20,
        marginVertical:110,
        marginTop:-30,
    },
    forms:{
        flexDirection:'column',
        marginTop:-30,
    },
    textinput:{
            fontSize:20,
            fontWeight:'300',
            borderColor:'#48D1CC',
            borderWidth:3,
            borderRadius:15,
            padding:10,
            marginTop:10,
    },
    login: {
      fontWeight:'bold',
      color:'#48D1CC',
      
      

  },
})