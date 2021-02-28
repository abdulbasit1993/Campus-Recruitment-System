import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import {Button,Icon} from 'native-base'

import Login from './Screens1/Login'
import Register from './Screens1/Register'




//...
export default function Welcome({navigation}) {

	return(
		<View style={styles.container}>
        <View style={{ alignItems: "center" }}>
              <Image
                source={require("./Image/logo.jpg")}
                style={{
                  width: "100%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
            </View>
        
            <View style={styles.buttonPlaceholder}>
                {/* //..UPDATE BUTTON */}
                <Button
                onPress={()=>navigation.navigate('Login')}
                 style={styles.login}>
                <Text style={styles.textstyle}>
                        Student
                    </Text>
                </Button>
                {/* //..UPDATE BUTTON */}
               
                </View>
                
            <View style={styles.buttonPlaceholder}>
                {/* //..UPDATE BUTTON */}
                <Button
                onPress={()=>navigation.navigate('CompanyLogin')}
                 style={styles.login}>
                <Text style={styles.textstyle}>
                Company
                    </Text>
                </Button>
                {/* //..UPDATE BUTTON */}
               
                </View>
                <View style={styles.buttonPlaceholder}>
                {/* //..UPDATE BUTTON */}
                <Button
                onPress={()=>navigation.navigate('Login')}
                 style={styles.login}>
                <Text style={styles.textstyle}>
                Admin
                    </Text>
                </Button>
                {/* //..UPDATE BUTTON */}
               
                </View>
            </View>
      
        
	);
}

const styles = StyleSheet.create({
	container: {
        flexDirection:'column',
        marginHorizontal:70,
        alignSelf:'center',
        marginVertical:150,
        marginTop: 0,
        
	},
	header1: {
		// marginTop: '0%',
		fontSize:15,
        color: 'red',
    },
    header2: {
        position:'relative',
        textAlign:'center',
		fontSize: 20,
		color: 'red',
		
    },
	buttonPlaceholder: {
        flexDirection: 'column',
        flex:1,
        marginTop:0,

	},
	login: {
        padding:20,
        borderRadius:20,
        marginBottom:10,
        backgroundColor:'#48D1CC',
        justifyContent:'center',
        

    },
    textstyle:{
            color:'white',
            fontSize:30,
            textAlign:'center'
    }
    
});