import React, {Component} from 'react';
import { Provider } from 'react-redux';
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

import Login from './src/screens/Login'
import ForYou from './src/screens/ForYou'
import DetailWebtoon from './src/screens/DetailWebtoon'
import DetailEp from './src/screens/DetailEpisode'
import Favourite from './src/screens/Favourite'
import Profile from './src/screens/Profile'
import EditProfile from './src/screens/EditProfile'
import MyCreation from './src/screens/MyCreation'
import CreateWebtoon from './src/screens/CreateWebtoon'
import CreateEpisode from './src/screens/CreateEpisode'
import EditWebtoon from './src/screens/EditWebtoon'
import EditEpisode from './src/screens/EditEpisode'
import SearchWebtoon from './src/screens/SearchWebtoon'
import SearchFavorite from './src/screens/SearchFavourite'

import store from './src/_redux/store'

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
    SearchWebtoon: {
        screen: SearchWebtoon,
        title: 'Search Webtoon',
        // navigationOptions: {header: null} 
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

const FavoriteStack = createStackNavigator({
  Favourite: {
      screen: Favourite,
      title: "Favourite",
      navigationOptions: {header: null, },
    },
  DetailWebtoon: {
      screen: DetailWebtoon,
      title: 'Detail Webtoon',
  },
  DetailEp: {
      screen: DetailEp,
      title: 'Detail Episode', 
  }, 
  SearchFavorite: {
    screen: SearchFavorite,
    title: 'Search Favorite',
    // navigationOptions: {header: null} 
  }, 
  },
  {
    initialRouteName: "Favourite",
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
    Favourite: FavoriteStack,
    Profile: ProfileStack
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({horizontal,tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'ForYou') {
          iconName = `microsoft`;
        } else if (routeName === 'Favourite') {
          iconName = `star`;
        } else if (routeName === 'Profile') {
          iconName = `user`;}
      return <Icon type="FontAwesome5" name={iconName} size={25} style={{color: tintColor,}} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#E1F7D5',
      showLabel:false,
      keyboardHidesTabBar: true,
      style:{
      backgroundColor: '#22bb33',
    }
    },
    
  }
  )
    
 
const Switch = createSwitchNavigator({
  BottomTab: BottomTab, 
  SignedOut: SignedOut
  },
  {
   initialRouteName: "BottomTab",
  });

// export default createAppContainer(Switch);

const AppContainer = createAppContainer(Switch);

// class App extends Component {
//   render(){
//     return (
//       <AppContainer/>
//     )
//   }
// }

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App

// export default EditEpisode


