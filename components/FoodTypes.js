// import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
// import React from 'react'

// const FoodTypes = () => {
//     const types = [
//         {
//             id:"0",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
//             name:"Biriyani",
//         },
//         {
//             id:"1",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
//             name:"Dessert"
//         },
//         {
//             id:"2",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
//             name:"Burger"
//         },
//         {
//             id:"3",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
//             name:"Salad",

//         },
//         {
//             id:"4",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
//             name:"Sandwiches"
//         }
//     ]

//   return (
//     <View>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {types.map((item,index) => (
//             <View style={{margin:10}} key={index}>
//                 <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30}}/>
//                 <Text style={{marginTop:6,textAlign:"center"}}>{item.name}</Text>
//             </View>
//         ))}
//       </ScrollView>
//     </View>
//   )
// }

// export default FoodTypes

// const styles = StyleSheet.create({})





import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DessertScreen from '../screens/DessertScreen';

const FoodTypes = () => {
  const navigation = useNavigation();

  const types = [
    {
      id: "0",
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
      name: "Biriyani",
      route: 'BiriyaniScreen',
    },
    {
      id: "1",
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
      name: "Dessert",
      route: 'DessertScreen',
    },
    // Resto de los tipos de comida...
  ];

  const navigateToScreen = (route) => {
    navigation.navigate(route);
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <TouchableOpacity
            style={{ margin: 10 }}
            key={index}
            onPress={() => navigateToScreen(item.route)}
          >
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 30 }} />
            <Text style={{ marginTop: 6, textAlign: "center" }}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});