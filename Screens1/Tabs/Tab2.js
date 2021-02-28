import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Tab2 = () => {
  let [listData, setListData] = useState([]);

  /*
    You can use different filters, limitar, start-end boundaries
    and can also order the results
    firestore()
        .collection('Users')
        // Filter results
        .where('age', '>=', 18)
        .where('languages', 'in', ['en', 'fr'])
        // Limit results
        .limit(20)
        // Order results
        .orderBy('age', 'desc')
        // Pagination using startAt, endAt, startAfter, endBefore
        .startAt(18)
        .endAt(30)
        .get()
        .then(querySnapshot => {});
  */

  useEffect(() => {
    firestore()
      .collection('Users')
      .get()
      .then((querySnapshot) => {
        /*
            A QuerySnapshot allows you to inspect the collection,
            such as how many documents exist within it,
            access to the documents within the collection,
            any changes since the last query and more.
        */
        let temp = [];
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          console.log('user Id: ', documentSnapshot.id);
          /*
            A DocumentSnapshot belongs to a specific document,
            With snapshot you can view a documents data,
            metadata and whether a document actually exists.
          */
          let userDetails = {};
          // Document fields
          userDetails = documentSnapshot.data();
          // All the document related data
          userDetails['id'] = documentSnapshot.id;
          temp.push(userDetails);
          setListData(temp);
        });
      });
  }, []);

  const itemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }} />
    );
  };

  let itemView = ({item}) => {
    return (
      <View
        key={item.name}
        style={{
          backgroundColor: 'white',
          padding: 20,
          color:'#48D1CC'
        }}>
        <Text  style={{
          color:'#48D1CC',
          fontWeight:'bold'
        }}>Doc Id: {item.id}</Text>
        <Text style={{
          color:'#48D1CC',
          fontWeight:'bold'
        }}>Name: {item.name}</Text>
        <Text style={{
          color:'#48D1CC',
          fontWeight:'bold'
        }}>Contact: {item.phonenumber}</Text>
        <Text style={{
          color:'#48D1CC',
          fontWeight:'bold'
        }}>Age: {item.age}</Text>
         <Text style={{
          color:'#48D1CC',
          fontWeight:'bold'
        }}>Qualification: {item.qualification}</Text>
         <Text style={{
          color:'#48D1CC',
          fontWeight:'bold'
        }}>Skill: {item.skill}</Text>
      </View>
    );
  };

  return (
    <View>
       <Text style={{
                fontSize:40,
                textAlign:'center',
                fontWeight:'200',
                color:'#48D1CC'
            }}>ALL Vacancies
           </Text>
      <FlatList
        data={listData}
        ItemSeparatorComponent={itemSeparatorView}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemView}
      />
    </View>
  );
};

export default Tab2;