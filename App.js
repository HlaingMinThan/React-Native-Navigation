import { StyleSheet, Text, View ,Button } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details 1"
        onPress={() => navigation.navigate('Details' ,{
          id : 1,
          name : "Hlaing min than"
        })}
      />
      <Button
        title="Go to Details 2"
        onPress={() => navigation.navigate('Details' ,{
          id : 2,
          name : "Aung Aung"
        })}
      />
    </View>
  );
}

function DetailsScreen({route}) {
  let { id , name } = route.params;
  
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('detail page focused for id '+id)
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('detail page unfocused for id '+id)
      };
    }, [])
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen for id {id}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
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
