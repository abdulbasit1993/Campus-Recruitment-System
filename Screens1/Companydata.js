import React from 'react';
import {
	StyleSheet,

} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './Tabs2/Tab1';
import Tab2 from './Tabs2/Tab2';

const Companydata =()=>{
   
    return (
      <Container >
        <Header hasTabs style={styles.container}/>
        <Tabs >
          <Tab heading="My detail" tabStyle={{backgroundColor: '#48D1CC'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#FFA500'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab1 />
          </Tab>
          <Tab heading="All Vaccancies" tabStyle={{backgroundColor: '#48D1CC'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#FFA500'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
  const styles =StyleSheet.create({
    container:{
        backgroundColor:'#48D1CC',
        marginTop:-60,
    }
  })

export default Companydata;