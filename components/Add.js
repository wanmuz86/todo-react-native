import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function Add({navigation}) {
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [location,setLocation] = useState('');
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Item Name"
      value={name}
      onChangeText={(text)=>setName(text)}
      ></TextInput>
      <TextInput placeholder="Enter Item Description"
      value={desc}
      onChangeText={(text)=>setDesc(text)}
      
      ></TextInput>
      <TextInput placeholder="Enter Location" value={location}
      onChangeText={(text)=>setLocation(text)}></TextInput>
      <Button title="Add new Item" onPress={()=>
        {
            // I will put this data inside my memory..
            // In the first page,
            // the onGoBack function will retrieve this data
            navigation.state.params.onGoBack(
                {
                    name:name,
                    location:location,
                    description:desc}
                    )
            navigation.goBack()
            
            }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
