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
export default class CreateWebtoon extends Component {

constructor(){
    super();
    this.state = {
        chapter: [{
            ep: 'Ep.4',
            date:'07 October 2019',
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421569205.jpg'
        }, {
            ep: 'Ep.3',
            date:'06 October 2019',
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421564610.jpg'
        }, {
            ep: 'Ep.2',
            date:'05 October 2019',
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421585650.jpg'
        }, {
            ep: 'Ep.1',
            date:'04 October 2019',
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421585642.jpg'
        }],
        }
    }

static navigationOptions = ({ navigation }) => {
    return {
        title: "Create Webtoon",
        headerStyle: {
            backgroundColor: '#32cd32',
            },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Icon type="Entypo" name='check' style={styles.BBIcon} 
            onPress = {() => navigation.navigate('MyCreation')}
            />
            ),
        };
    }


render() {
    return (
        <Container>
        <Content style={{flex: 1, margin:15}}>
        <Text style={{fontSize: 20,fontWeight: 'bold', marginVertical: 7}}>Title</Text>
        <TextInput
         placeholder='Title'
        //  onChangeText={username => this.setState({ username })}
        //  value = {this.state.username}
        style= {{borderWidth: 2, borderColor: 'black', borderRadius: 100, textAlign:'center'}}
        />
        <Text style={{fontSize: 20,fontWeight: 'bold', marginVertical: 15}}>Episode</Text>
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
                <Text style={styles.AllDate}>{item.date}</Text>
                </View>
            </Row>
            </View>
        }/>                                  
        
        <Button block rounded style={{alignSelf: 'center', marginTop: 15}} 
        onPress={() => this.props.navigation.navigate('CreateEpisode')}
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
      fontSize: 13}
})
