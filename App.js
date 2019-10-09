import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator,  } from 'react-navigation-stack';


import Login from './screens/Login'
import ForYou from './screens/ForYou'
import DetailWebtoon from './screens/DetailWebtoon'
import DetailEp from './screens/DetailEpisode'

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

const SignedIn = createStackNavigator(
    {
    ForYou: {
        screen: ForYou,
        title: 'ForYou',
        navigationOptions: {header: null},
        },
    DetailWebtoon: {
        screen: DetailWebtoon,
        title: 'Detail Webtoon',
    },
    DetailEp: {
        screen: DetailEp,
        title: 'Detail Episode'
    }, 
     initialRouteName: 'ForYou',
    });

const Switch = createSwitchNavigator({
    SignedIn: SignedIn, 
    SignedOut: SignedOut
    },
    {
     initialRouteName: "SignedOut",
    });


export default createAppContainer(Switch);

// export default DetailEp