import "react-native-gesture-handler";

// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import Login from './Screens1/Login'
import Register from './Screens1/Register'
import Welcome from './Welcome'
import Studentdata from './Screens1/Studentdata'
import CompanyRegister from './Screens1/CompanyRegister'
import CompanyLogin from './Screens1/CompanyLogin'
import Companydata from'./Screens1/Companydata'
const Stack = createStackNavigator();


const navigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          {/* SplashScreen which will come once for 2 Seconds */}
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            // Hiding header for Splash Screen
            options={{
                title: "Welcome to CampusRecruit!", //Set Header Title
                headerStyle: {
                  backgroundColor: "#48D1CC", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
          />
          {/* Auth Navigator which include Login Signup */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title: "Login Screen", //Set Header Title
                headerStyle: {
                  backgroundColor: "#48D1CC", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Register Screen", //Set Header Title
              headerStyle: {
                backgroundColor: "#48D1CC", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
           <Stack.Screen
            name="Studentdata"
            component={Studentdata}
            options={{
              title: "Student Data", //Set Header Title
              headerStyle: {
                backgroundColor: "#48D1CC", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="CompanyLogin"
            component={CompanyLogin}
            options={{
              title: "Company Login", //Set Header Title
              headerStyle: {
                backgroundColor: "#48D1CC", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          /><Stack.Screen
          name="CompanyRegister"
          component={CompanyRegister}
          options={{
            title: "Company Register", //Set Header Title
            headerStyle: {
              backgroundColor: "#48D1CC", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Companydata"
          component={Companydata}
          options={{
            title: "Company Data", //Set Header Title
            headerStyle: {
              backgroundColor: "#48D1CC", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />

        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default navigator;