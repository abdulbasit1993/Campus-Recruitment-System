import React, { useState,useEffect } from "react";
import { View, Picker, StyleSheet,Text,Image } from "react-native";
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
const Tab1 = () => {
  const [user, setUser] = useState();
  const {uid} = auth().currentUser;

  const getUser = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('Users')
        .doc(uid)
        .get();

      const userData = documentSnapshot.data();
      setUser(userData);
    } catch {
      //do whatever
    }
  };

  // Get user on mount
  useEffect(() => {
    getUser();
  }, []);

  // return info if user is set
    return (
      <View>
         <Text style={{
                fontSize:30,
                textAlign:'center',
                fontWeight:'bold',
                color:'#48D1CC'
            }}>STUDENT
           </Text>
  
      <View style={styles.container}>
       
        <Text  style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'#48D1CC'}}>Name:   {user && user?.name}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'#48D1CC'}}>Email:    {user && user?.email}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'#48D1CC'}}>Contact:  {user && user?.phonenumber}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'#48D1CC'}}>Age:   {user && user?.age}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'#48D1CC'}}>Qualification:   {user && user?.qualification}</Text>
                <Text></Text>
       <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'#48D1CC'}}>Skill:   {user && user?.skill}</Text>
      </View>
      </View>
    );
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:1,
 
    
    margin:20,
    
}
});

export default Tab1;