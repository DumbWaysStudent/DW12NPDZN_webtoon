import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
import {
    Container, 
    Content, 
    Text,
    Row,
    Left,
    Right,
    Body,
    Title,
    Header,
    Form, 
    Item, 
    Input, 
    Button, 
    Icon,  
    } 
    from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
export default class CreateEpisode extends Component {

constructor(){
    super();
    this.state = {
        chapter: [ {
            ep: '1. cover.png',
           
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421585650.jpg'
        }, {
            ep: '2. introduction.png',
            
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421585642.jpg'
        }],
        }
    }

static navigationOptions = ({ navigation }) => {
    return {
        title: "Create Episode",
        headerStyle: {
            backgroundColor: '#32cd32',
            },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Icon type="Entypo" name='check' style={styles.BBIcon} 
            onPress = {() => navigation.navigate('CreateWebtoon')}
            />
            ),
        };
    }


render() {
    return (
        <Container>
        <Content style={{flex: 1, margin:15}}>
        <Text style={{fontSize: 20,fontWeight: 'bold', marginVertical: 7}}>Name</Text>
        <TextInput
         placeholder='Name'
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
