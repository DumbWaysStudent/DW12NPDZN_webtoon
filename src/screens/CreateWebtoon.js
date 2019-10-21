import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, PixelRatio, } from 'react-native';
import {
    Container, 
    Content, 
    Text,
    Button, 
    Icon,  
    } 
    from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import ImagePicker from 'react-native-image-picker';
import config from '../../config-env'

export default class CreateWebtoon extends Component {

constructor(){
    super();
      this.state = {
        id: '',
        token: '',
        image:'',
        title: '',
        isFavorite:'',
        genre: '',
        avatarSource: null,
        }
      this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

async componentDidMount(){
  await this.getToken()
  await this.getId()
  this.props.navigation.setParams({ createSketch: this.createSketch})
}

async getId () {
  await AsyncStorage.getItem('id').then(key=>
    this.setState({
      id: JSON.parse(key)
    }))
}

async getToken () {
  await AsyncStorage.getItem('token').then(key=>
    this.setState({
      token: key
    }))
}


static navigationOptions = ({ navigation }) => {
    return {
        title: "Create Sketchtoon",
        headerStyle: {
            backgroundColor: '#32cd32',
            },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Icon type="Entypo" name='check' style={styles.BBIcon} 
            onPress = {navigation.getParam('createSketch')}
            />
            ),
        };
    }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        this.setState({
          avatarSource: source,
          
        });

      
      }
    });
  }

createSketch = () => {
 
  axios({
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${this.state.token}`
    },
    url: `${config.API_URL}/user/${this.state.id}/sketch`,
    data: {
      title: this.state.title,
      genre: this.state.genre,
      isFavorite: false,
      image: this.state.image,
    }
  }).then(res => {
    this.props.navigation.navigate('MyCreation')
  })
}

createSketchAndCh = () => {
 
  axios({
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${this.state.token}`
    },
    url: `${config.API_URL}/user/${this.state.id}/sketch`,
    data: {
      title: this.state.title,
      genre: this.state.genre,
      isFavorite: false,
      image: this.state.image,
    }
  }).then(res => {
    
    this.props.navigation.navigate('CreateEpisode',{
      skId: res.data.sketch.id
    })
  })
}

render() {
  return (
    <Container>

      <Content style={{flex: 1, margin:15}}>
        
        <View>
          <Text style={{fontSize: 20,fontWeight: 'bold'}}>Insert Data</Text>
          <TextInput
          placeholder='Title'
          onChangeText={title => this.setState({ title })}
          style= {{borderWidth: 2, borderColor: 'black', marginTop: 7, borderRadius: 100, fontSize:20, textAlign:'center'}}
          />
          <TextInput
          placeholder='Genre'
          onChangeText={genre => this.setState({ genre })}
          style= {{borderWidth: 2, borderColor: 'black', marginTop: 7, borderRadius: 100, fontSize:20, textAlign:'center'}}
          />
        </View>
        
        <Text style={{fontSize: 20,fontWeight: 'bold', marginTop: 30}}>Insert Sketch Banner</Text>
        <View style={styles.BannerContainer}>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View
                style={[styles.avatar, styles.avatarContainer]}>
                {this.state.avatarSource === null ? (
                <Image style={styles.avatar} source={require('./blank.jpg')} />
                ) : (
                <Image style={styles.avatar} source={this.state.avatarSource} />
                )}
                
            </View>
          </TouchableOpacity>
        </View>
        
        <Button block rounded style={{alignSelf: 'center', marginTop: 20}} 
        // onPress={() => this.props.navigation.navigate('CreateEpisode')}
        onPress={() => this.createSketchAndCh()}
        >
          <Text style={{fontSize:17}} >+ Add Episode</Text>
        </Button>

      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  BBIcon: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 29,
    marginRight: 20
  },
  AllCont: {
    marginBottom:15},
  AllImg: { 
    width: 75, 
    height: 75, 
    borderWidth: 2, 
    borderColor:'black', },
  AllDes: {
    marginLeft: 15, 
    flex:1, 
    justifyContent:'center'},
  AllEp: {
    marginBottom: 5,
    fontWeight:'bold' },
  AllDate: {
    marginBottom: 5, 
    fontSize: 13},
  BannerContainer: {
    flex: 1,
    marginTop: 7,
    marginBottom: 20,
    alignItems: 'center',},
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',},
  avatar: {
    borderColor: 'black',
    borderWidth: 2,
    width: 380,
    height: 250,},
  },
)
