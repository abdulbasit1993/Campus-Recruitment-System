import React,{useState,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Picker,
} from 'react-native';
import {Button,Icon} from 'native-base'

export default CompanyRegister =({navigation})=>{
    const firestore_ref=firestore().collection('Company')
    //..
    const [fullname,setFullName]=useState('')
    const [displayname,setDisplayName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const [age,setage]=useState('')
    const [qualification,setqualification]=useState('')
    const [skill,setskill]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    

    //..
    async function RegisterUser(){
        await firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(),password)
        .then((loggeduser)=>{
            const userdata=firestore_ref.doc(loggeduser.user.uid)
            userdata.set({
                name:fullname,
                email:email,
                phonenumber:phoneNumber,
                age:age,
                qualification:qualification,
                skill:skill,
            }).then(()=>{
                alert('sucesss')
              //  navigation.navigate("Login");
            })
        })
        .catch((error)=>{
            alert(error)
        })

    }

     

    return(
        <View style={styles.container}>
            <View style={{
                padding:10,
              
                marginLeft:0,
            }}>
            {/* <Text style={{
                fontSize:35,
                textAlign:'center',
                fontWeight:'200',
                color:'red'
            }}>
Register            </Text> */}
            </View>
            
            <View style={styles.forms}>
            <TextInput
                placeholder={'Full Name'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setFullName(text)}
                value={fullname}
                style={styles.textinput}>
                </TextInput>
                
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
                inlineImageLeft={"account"}
                secureTextEntry
                //...
                onChangeText={(text)=>setpassword(text)}
                value={password}
                keyboardType="default"
                style={styles.textinput}>
                </TextInput>
                <TextInput
                placeholder={'Phone Number'}
                inlineImageLeft={"account"}
                keyboardType="numeric"
               
                onChangeText={(text)=>setPhoneNumber(text)}
                value={phoneNumber}
                style={styles.textinput}>
                </TextInput>
                <TextInput
                placeholder={'Age'}
                inlineImageLeft={"account"}
                keyboardType="numeric"
                //..
                onChangeText={(text)=>setage(text)}
                value={age}
                style={styles.textinput}>
                </TextInput>
                <TextInput
                placeholder={'Qualification'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setqualification(text)}
                value={qualification}
                style={styles.textinput}>
                </TextInput>
                <TextInput
                placeholder={'Skill'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setskill(text)}
                value={skill}
                style={styles.textinput}>
                </TextInput>
                <Button
                onPress={()=>RegisterUser()}
                style={{
                    borderRadius:20,
                    padding:10,
                    marginTop:5,
                    justifyContent:'center',
                    backgroundColor:'#48D1CC'
                }}
           >
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:20,

               }}>
                   Sign Up
               </Text>

           </Button>
            </View>
           
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        marginVertical:110,
        marginTop:-40,
    },
    forms:{
        flexDirection:'column',
        flex:1,
    },
    textinput:{
            fontSize:20,
            fontWeight:'300',
            borderColor:'#48D1CC',
            borderWidth:3,
            borderRadius:15,
            padding:10,
            marginTop:5,
    },
    
})