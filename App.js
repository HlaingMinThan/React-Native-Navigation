import { StyleSheet, Text, View ,Button } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';


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
  //Be careful when u use tab navigator, the detail btn on tab don't have any route param -> so we can got error if we click detail route on tab first time
  //way to prevent is just handling the default state for rotue.params
  let { id , name } = route.params || {};//handle for null case
console.log('click hit',id)
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

//native stack usage example
// const Stack = createNativeStackNavigator();
// export default function App() {
  //   return (
    //     <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="Details" component={DetailsScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    //   );
// }

//Tab navigation usage example
// const Tab = createBottomTabNavigator();

// export default function App() {
//     return (
//       <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen}  
//         options={{
//           tabBarIcon:(color,size) => (
//               <Entypo name="home" size={20} color={color} />
//           )
//         }}
//         />
//         <Tab.Screen name="Details" component={DetailsScreen}
//            options={{
//             tabBarIcon:(color,size) => (
//               <MaterialIcons name="details" size={20} color={color} />
//             )
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//       );
// }

//Drawer navigation example
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
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
