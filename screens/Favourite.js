import React, {Component} from 'react';
import {
  Container, 
  Content, 
  View, 
  Text, 
  Item, 
  Input, 
  Button, 
  Header,
  Row,
  Footer,
  FooterTab,
  Icon,  
  } 
  from 'native-base';
import { StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList, Image} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'


  export default class Fav extends Component{

    constructor(){
      super();
      this.state = {
          favorites: [], 
          keyword: ''    
      }}

    async componentDidMount(){
      await this.getToken()
      this.showFavorite()
    }

    async getToken () {
      await AsyncStorage.getItem('token').then(key=>
        this.setState({
          token: key
        }))
    }

    showFavorite = () => {
      axios({
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${this.state.token}`
        },
        url: 'http://192.168.1.82:5001/api/v1/sketches/favorites'
      }).then(res => {
        const favorites = res.data
        this.setState({favorites})
      })

    }   


    render(){
        return(
        <Container>
            <Header searchBar rounded style={styles.Header}>
              <Item rounded>
                <Input placeholder="Search" onChangeText={keyword =>this.setState({keyword})}/>
                <Icon name="search" style={styles.HeaderIcon}
                onPress={() => this.props.navigation.navigate('SearchFavorite', {     
                  keyword: this.state.keyword,
                })}
                />
              </Item>
            </Header>
            <Content style={styles.Content}>
              <View style={styles.AllCon}>    
                <FlatList
                data = {this.state.favorites}
                keyExtractor = {item => item.id}
                renderItem = {({item}) => 
                <View style={styles.AllCont} key={item.image}>
                    <Row>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('DetailWebtoon', {
                        detail: item.image,
                        title: item.title,
                        skId: item.id
                    })}
                    >
                       <Image style={styles.AllImg} source={{ uri: item.image }} /> 
                    </TouchableOpacity>
                   
                    <View style={styles.AllDes}>
                        <Text style={styles.AllTitle}>{item.title}</Text>
                        <Text style={styles.AllStar}>{item.genre}</Text>
                    </View>
                    </Row>
                </View>
                }/>  
              </View>
            </Content>
        </Container>
        ) 
    }
  }

  const styles = StyleSheet.create({
    Header: {
      backgroundColor: '#22bb33'},
    HeaderIcon: {
      paddingRight: 17, 
      fontSize:30},
    Content: {
      paddingVertical: 20},
    AllCon: {
      margin: 15, 
      marginTop: 0},
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
    AllTitle: {
      marginBottom: 5,
      fontWeight:'bold' },
    AllStar: {
      marginBottom: 5, 
      fontSize: 13
    },
  })