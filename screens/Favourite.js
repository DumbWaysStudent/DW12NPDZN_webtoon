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
import { StyleSheet, ScrollView, Dimensions, FlatList, Image} from 'react-native'

  export default class Fav extends Component{

    constructor(){
        super();
        this.state = {
            favourites: [{
                title: 'Tokyo Ghoul',
                fav:'100+ favourite',
                image: 'https://dw9to29mmj727.cloudfront.net/products/1421585278.jpg'
            }, {
                title: 'Astra Lost in Space',
                fav:'1000+ favourite',
                image: 'https://dw9to29mmj727.cloudfront.net/products/142156954X.jpg'
            }, {
                title: 'Bakuman',
                fav:'500+ favourite',
                image: 'https://dw9to29mmj727.cloudfront.net/products/1421569205.jpg'
            }, {
                title: 'Blue Exorcist',
                fav:'200+ favourite',
                image: 'https://dw9to29mmj727.cloudfront.net/products/1421564610.jpg'
            }, {
                title: 'The Promised Neverland',
                fav:'400+ favourite',
                image: 'https://dw9to29mmj727.cloudfront.net/products/1421585650.jpg'
            }, {
                title: 'Assassination Classroom',
                fav:'700+ favourite',
                image: 'https://dw9to29mmj727.cloudfront.net/products/1421585642.jpg'
            }],
          
        }}

    render(){
        return(
        <Container>
            <Header searchBar rounded style={styles.Header}>
              <Item rounded>
                <Input placeholder="Search" />
                <Icon name="search" style={styles.HeaderIcon}/>
              </Item>
            </Header>
            <Content style={styles.Content}>
              <View style={styles.AllCon}>    
                <FlatList
                data = {this.state.favourites}
                keyExtractor = {item => item.id}
                renderItem = {({item}) => 
                <View style={styles.AllCont} key={item.image}>
                    <Row>
                    <Image style={styles.AllImg} source={{ uri: item.image }} /> 
                    <View style={styles.AllDes}>
                        <Text style={styles.AllTitle}>{item.title}</Text>
                        <Text style={styles.AllStar}>{item.fav}</Text>
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
      backgroundColor: "limegreen"},
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