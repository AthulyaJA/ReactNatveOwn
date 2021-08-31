import * as React from 'react';
import { Text, View,Image,Linking  } from 'react-native';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import Carousel from 'react-native-snap-carousel';



const [task,setTask]=useState([{
  title:"Item 1",
  text: "Text 1",
},
{
  title:"Item 1",
  text: "Text 1",
},])
_renderItem = ({item, index}) => {
  return (
      <View style={styles.slide}>
          <Text style={styles.title}>{ item.title }</Text>
      </View>
  );
}
const HomeScreen = ({item, index}) => {
  return (
    <Carousel
    ref={(c) => { setTask._carousel = c; }}
    data={task.entries}
    renderItem={setTask._renderItem}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
  />
  );
}
function SettingsScreen() {
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
      onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
  source={{ uri: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4'}}
  style={{ width: 400, height: 200,marginLeft:10,marginTop:20 }}/>
     <Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,}} onPress={() => Linking.openURL('https://www.britannica.com/plant/Tomatto')}>Fruits<MaterialCommunityIcons name="fruit-cherries" size={24} color="black" /></Text>
     <Image
      onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
  source={{ uri: 'https://res.cloudinary.com/grohealth/image/upload/c_fill,f_auto,fl_lossy,h_650,q_auto,w_1085/v1583748171/DCUK/Content/iStock-857145602.jpg'}}
  style={{ width: 400, height: 200,marginLeft:10,marginTop:20 }}/>
      <Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30}} onPress={() => Linking.openURL('https://www.britannica.com/plant/Tomatto')}>Vegitables<MaterialCommunityIcons name="fruit-watermelon" size={24} color="black" /></Text>
      <Image
      onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
  source={{ uri: 'https://www.velopress.com/wp-content/uploads/2015/08/soywheatcorn.jpg'}}
  style={{ width: 400, height: 200,marginLeft:10,marginTop:20 }}/>
      <Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30}} onPress={() => Linking.openURL('https://www.britannica.com/plant/Tomatto')}>Field Crops<MaterialCommunityIcons name="sprout" size={24} color="black" /></Text>
    </View>
    </ScrollView>
  );
}

const setClick=()=>{
  alert()
}
function CropScreen() {
  return (
    <>
    <ScrollView>
    <View style={{ flex: 1, flexDirection: 'row'}}>
     
     
                    <Image
                    onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
                source={{ uri: 'https://cdn.britannica.com/24/191624-131-817E2227/Feed-corn-harvest-field-Kings-Hill-County.jpg' }}
                style={{ width: 200, height: 200,marginLeft:10,marginTop:20 }}
              />
                <Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,marginTop:100}} onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}>Wheat
                  <Octicons name="link-external" size={24} color="blue" /></Text>
              
              
    </View>





    <View style={{ flex: 1, flexDirection: 'row'}}>

     
     
      <Image
      onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
  source={{ uri: 'https://images.newscientist.com/wp-content/uploads/2021/07/19142457/20-july_tomato-nervous-system.jpg' }}
  style={{ width: 200, height: 200,marginLeft:10,marginTop:20 }}
/>
<Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,marginTop:100}} onPress={() => Linking.openURL('https://www.britannica.com/plant/Tomatto')}>Tomatto
<Octicons name="link-external" size={24} color="blue" /></Text>
     
     
    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
     
     
      <Image
      onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
  source={{ uri: 'https://images.fineartamerica.com/images-medium-large-5/rice-oryza-sativa-sam-k-transcience-photo-library.jpg' }}
  style={{ width: 200, height: 200,marginLeft:10,marginTop:20 }}
/>
<Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,marginTop:100}} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Rice')}>Rice
<Octicons name="link-external" size={24} color="blue" /></Text>
     
     
    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
     
     
      <Image
      onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
  source={{ uri: 'https://cdn.shopify.com/s/files/1/2129/8197/products/ChillypepperMirchiseeds_result.jpg?v=1584450094' }}
  style={{ width: 200, height: 200,marginLeft:10,marginTop:20 }}
/>
<Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,marginTop:100}} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Chilly')}>Chilly
<Octicons name="link-external" size={24} color="blue" /></Text>
     
     
    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
     
     
      <Image
      onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
  source={{ uri: 'https://www.thespruce.com/thmb/-NoMU2EYtm2IYIU8rYBnNjGjhwE=/3665x3665/smart/filters:no_upscale()/tips-for-better-strawberries-1401965-01-1623beb67f9e4200985ac03f07ffe7dc.jpg' }}
  style={{ width: 200, height: 200,marginLeft:10,marginTop:20 }}
/>
<Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,marginTop:100}} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Strawberry')}>Strawberry
<Octicons name="link-external" size={24} color="blue" /></Text>
     
     
    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
     
     
      <Image
      onPress={() => Linking.openURL('https://www.britannica.com/plant/wheat')}
  source={{ uri: 'https://www.thespruceeats.com/thmb/xucSiY_ascGeT_ijAIXC9yDTh5U=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/high-angle-view-of-onions-in-basket-on-table-769799173-5be8e9b846e0fb00268a905f.jpg' }}
  style={{ width: 200, height: 200,marginLeft:10,marginTop:20 }}
/>
<Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,marginTop:100}} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Onion')}>Onions
<Octicons name="link-external" size={24} color="blue" /></Text>
     
     
    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
     
     
      <Image  
      
  source={{ uri: 'https://rurallivingtoday.com/wp-content/uploads/types-of-oranges-1.jpeg' }}
  style={{ width: 200, height: 200,marginLeft:10,marginTop:20 }}
/>
<Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,marginTop:100}} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Orange_(fruit)')}>Oranges
<Octicons name="link-external" size={24} color="blue" /></Text>
     
     

    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
     
     
      <Image  
      
  source={{ uri: 'https://static.toiimg.com/thumb/76329586.cms?width=680&height=512&imgsize=1068482' }}
  style={{ width: 200, height: 200,marginLeft:10,marginTop:20 }}
/>
<Text style={{flex:1,fontSize:30,justifyContent:'center',marginLeft:30,marginTop:100}} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Apple')}>Apple
<Octicons name="link-external" size={24}  color="blue" /></Text>

     

    </View>

   
    </ScrollView>
    </>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
            }
            else if (route.name === 'Crops') {
              iconName = focused ? 'sprout' : 'sprout';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Crops" component={CropScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}