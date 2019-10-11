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
import MyCreation from './screens/MyCreation'
import CreateWebtoon from './screens/CreateWebtoon'
import CreateEpisode from './screens/CreateEpisode'
import EditWebtoon from './screens/EditWebtoon'
import EditEpisode from './screens/EditEpisode'



const SignedOut = createStackNavigator(
    {
      Login: {
        screen: Login,
        title: 'Login',
        navigationOptions: {header: null},
      }
    },
    {
      initialRouteName: 'Login',
    }
  );

const ForYouStack = createStackNavigator(
    {
    ForYou: {
        screen: ForYou,
        title: "For You",
        navigationOptions: {header: null}
    },
    DetailWebtoon: {
        screen: DetailWebtoon,
        title: 'Detail Webtoon',
        
    },
    DetailEp: {
        screen: DetailEp,
        title: 'Detail Episode',
        
    }, 
     initialRouteName: 'ForYou',
    });

const EditProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      title: "Profile",
      navigationOptions: {header: null},
    },
    EditProfile: {
      screen: EditProfile,
      title: "Edit Profile",
      
    }
  }
)


const MyCreationStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      title: "Profile",
      navigationOptions: {header: null},
    },
    MyCreation: {
      screen: MyCreation,
      title: "My Creation",
    }, 
    CreateWebtoon: {
      screen: CreateWebtoon,
      title: "Create Webtoon"
    },
    CreateEpisode: {
      screen: CreateEpisode,
      title: "Create Episode"
    },
    EditWebtoon: {
      screen: EditWebtoon,
      title: "Edit Webtoon"
    },
    EditEpisode: {
        screen: EditEpisode,
        title: "Edit Episode"   
    },
  }
)


const ProfileStack = createSwitchNavigator(
  {
    EditProfileStack: EditProfileStack,
    MyCreationStack: MyCreationStack,
  },
  {
    initialRouteName: "EditProfileStack",
   }
)

const BottomTab = createBottomTabNavigator({
    ForYou: ForYouStack ,
    Favourite: {
      screen: Favourite,
      title: "Favourite",
      navigationOptions: {header: null, },
    },
    Profile: ProfileStack
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({horizontal,tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'ForYou') {
          iconName = `grid`;
        } else if (routeName === 'Favourite') {
          iconName = `star`;
        } else if (routeName === 'Profile') {
          iconName = `user`;}
      return <Icon type="Entypo" name={iconName} size={25} style={{color: tintColor,}} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#E1F7D5',
      style:{
      backgroundColor: '#22bb33',
      paddingTop: 5,
      
    }
    },
    
  }
  )
    
 
const Switch = createSwitchNavigator({
  BottomTab: BottomTab, 
  SignedOut: SignedOut
  },
  {
   initialRouteName: "SignedOut",
  });

export default createAppContainer(Switch);

// export default EditEpisode


