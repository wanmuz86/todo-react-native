import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,Button,TouchableOpacity } from 'react-native';


export default function Home({navigation}) {
// Refer to "how to write a function using parameter"
    const refresh = (value) => {
        console.log(value);
        // How do you add a new item in an array 
        //using spread operator
        // Use the spread operator...
        setTodos([...todos,value] )
    }

    const [todos, setTodos] = useState(
        [{
            "id":1,
        "name":"Eat Dinner",
        "location":"Home",
        "description":"Eat with Friends"
    },
    {
        "id":2,
        "name":"Watch Football",
        "location":"Home",
        "description":"Euro"
    },
    {
        "id":3,
        "name":"Prepare work",
        "location":"office",
        "description":"VueJS Material"
    }])
    
    const Item = ({ item }) => (
        <TouchableOpacity onPress={
            ()=>navigation.push('Detail',{'item':item})} 
            onLongPress={()=>{
            let deletedArray = todos.filter(val=>{
                return val != item
            })
            setTodos(deletedArray);
        }}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      );
  return (
    <View style={styles.container}>
        <FlatList
        data={todos}
        renderItem={ ({ item }) => (
            <Item item  ={item} />
          )}
        keyExtractor={item => item.id}
      />
      <Button onPress={()=>navigation.navigate('Add',
      {
        onGoBack:refresh
    }
      )} title="Add new Item"></Button>
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  }
});
