import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
import {
    Container, 
    Content, 
    Text,
    Row,
    Button, 
    Icon,  
    } 
    from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

export default class CreateEpisode extends Component {

  constructor(props){
      super(props);
      this.state = {
        id: '',
        skId: props.navigation.getParam('skId'),
        image: '',
        ch_title: '',
        token: '',
        chapter: [ {
            ep: '1. cover.png',
          
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421585650.jpg'
        }, {
            ep: '2. introduction.png',
            
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421585642.jpg'
        }],
        }
      }

  async componentDidMount(){
    await this.getToken()
    await this.getId()
    this.props.navigation.setParams({ createChapter: this.createChapter})
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
          title: "Create Chapter",
          headerStyle: {
              backgroundColor: '#32cd32',
              },
          headerTitleStyle: {
              fontWeight: 'bold',
          },
          headerRight: (
              <Icon type="Entypo" name='check' style={styles.BBIcon} 
              onPress = {navigation.getParam('createChapter')}
              />
              ),
          };
      }

  createChapter = () => {

    axios({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${this.state.token}`
      },
      url: `http://192.168.1.82:5001/api/v1/user/${this.state.id}/sketch/${this.state.skId}/chapter`,
      data: {
        chapter_title: this.state.ch_title,
        image: this.state.image,
        sketch_id: this.state.skId
      }
    }).then(res => {
      this.props.navigation.navigate('MyCreation')
    })
  }


  render() {
    return (
      <Container>
        <Content style={{flex: 1, margin:15}}>
        <Text style={{fontSize: 20,fontWeight: 'bold', marginVertical: 7}}>Insert Chapter Title</Text>
        <TextInput
        placeholder='Chapter Title'
        onChangeText={ch_title => this.setState({ ch_title })}
        style= {{borderWidth: 2, borderColor: 'black', borderRadius: 100, fontSize:20, textAlign:'center'}}
        />
        <Text style={{fontSize: 20,fontWeight: 'bold', marginVertical: 15}}>Add Images</Text>
        <FlatList
            data = {this.state.chapter}
            keyExtractor = {item => item.id}
            renderItem = {({item}) => 
            <View style={styles.AllCont} key={item.image}>
            <Row>
                <Image 
                style={styles.AllImg} 
                source={{ uri: item.image }} 
                />
                <View style={styles.AllDes}>
                <Text style={styles.AllEp}>{item.ep}</Text>
                <Button style={styles.AllButton}>
                  <Text style={styles.AllFav}>Delete</Text>
                </Button>
                </View>
            </Row>
            </View>
        }/>                                  
        
        <Button block rounded  style={{alignSelf: 'center', marginTop: 15}} >
        <Text style={{fontSize:17}} >+ Add Image</Text>
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
      width: 150, 
      height: 150, 
      borderWidth: 2, 
      borderColor:'black', },
    AllDes: {
      marginLeft: 15, 
      flex:1, 
      justifyContent:'space-around'},
    AllEp: {
      marginBottom: 10,
      fontSize: 20,
      fontWeight:'bold' },
    AllFav: {
      fontSize:15,
      color:'white', 
      fontWeight: 'bold'},
    AllButton: {
      justifyContent: 'center',
      width:110, 
      backgroundColor: '#bb2124'
      
    },
})
