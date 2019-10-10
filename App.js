import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator,  } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {
  Container, 
  Content, 
  View, 
  Text, 
  Row,
  Form, 
  Item, 
  Input, 
  Button, 
  Icon,  
  } 
  from 'native-base';

import Login from './screens/Login'
import ForYou from './screens/ForYou'
import DetailWebtoon from './screens/DetailWebtoon'
import DetailEp from './screens/DetailEpisode'
import Favourite from './screens/Favourite'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'


// const SignedOut = createStackNavigator(
//     {
//       Login: {
//         screen: Login,
//         title: 'Login',
//         navigationOptions: {header: null},
//       }
//     },
//     {
//       initialRouteName: 'Login',
//     }
//   );

// const ForYouStack = createStackNavigator(
//     {
//     ForYou: {
//         screen: ForYou,
//         title: "For You",
//         navigationOptions: {header: null}
//     },
//     DetailWebtoon: {
//         screen: DetailWebtoon,
//         title: 'Detail Webtoon',
        
//     },
//     DetailEp: {
//         screen: DetailEp,
//         title: 'Detail Episode',
        
//     }, 
//      initialRouteName: 'ForYou',
//     });

// const BottomTab = createBottomTabNavigator({
//     ForYou: ForYouStack ,
//     Favourite: {
//       screen: Favourite,
//       title: "Favourite",
//       navigationOptions: {header: null, },
//     },
//     Profile: {
//       screen: Profile,
//       title: "Profile",
//     }
//   }, {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({horizontal,tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'ForYou') {
//           iconName = `grid`;
//         } else if (routeName === 'Favourite') {
//           iconName = `star`;
//         } else if (routeName === 'Profile') {
//           iconName = `user`;}
//       return <Icon type="Entypo" name={iconName} size={25} style={{color: tintColor,}} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'black',
//       inactiveTintColor: 'gray',
//       style:{
//       backgroundColor: '#32cd32',
//       borderTopWidth: 1,
//       paddingTop: 5,
//       borderTopColor: 'green'
//     }
//     },
    
//   }
//   )
    
 
// const Switch = createSwitchNavigator({
//   BottomTab: BottomTab, 
//   SignedOut: SignedOut
//   },
//   {
//    initialRouteName: "SignedOut",
//   });

// export default createAppContainer(Switch);

export default EditProfile


