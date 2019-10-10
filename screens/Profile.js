import React, {Component} from 'react';
import {
  Container, 
  Content, 
  View, 
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
import { StyleSheet, Image, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends Component{

    constructor(props){
        super(props);
        this.state ={
            pic: "https://scontent.fcgk1-1.fna.fbcdn.net/v/t1.0-9/16265366_404431113233498_256851812072885448_n.jpg?_nc_cat=100&_nc_oc=AQktlMnBMwEVFZ9of9YsmK_h_hGgdt40CSUeC2RR2_nXktOJpKeVijqnj10p8Wg0qk8&_nc_ht=scontent.fcgk1-1.fna&oh=971e3a86ea6a37b3d5e50c5f220c719a&oe=5E17E637",
            username: "Syaiful",
            
        }
    }

    ComponentDidUpdate(){
        this.setState({
            pic: this.props.navigation.getParam('newPic'),
            username: this.props.navigation.getParam('newUsername'), 
        })
    }


    render(){
        return(
            <Container>
                <Header style={styles.Header}>
                <Left>
                </Left>
                <Body>
                    <Title style={styles.BB}>Profile</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => this.props.navigation.navigate('EditProfile',{
                  pic: this.state.pic,
                  username: this.state.username
                })}>
                    <Icon type="Entypo" name='edit' style={styles.BB}/>
                    </Button>
                </Right>
                </Header>
                <Content>
                    <View style={styles.ImgCont}>
                         <Image style={styles.Img} source={{uri: this.state.pic }}/>
                         <Text style={styles.Username}>{this.state.username}</Text>
                    </View>
                    <TouchableOpacity>
                        <Row style={styles.MyCreation}>
                          <Text style={styles.MyCreationText} >My Creation</Text>
                          <Icon type="AntDesign" name="right"/>
                        </Row>   
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.LogOut}>Log Out</Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: "limegreen",
    },
    BB: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 21,
        
    },
    ImgCont: {
        borderBottomWidth: 1, 
        borderColor: "black", 
        paddingVertical: 30},
    Img: {
        borderWidth: 2, 
        borderColor: "black", 
        alignSelf: 'center',
        width: 200, 
        height:200, 
        borderRadius: 100},
    Username: { 
        alignSelf: 'center', 
        margin: 10, 
        fontSize:20, 
        fontWeight:'bold'},
    LogOut: {
        padding:15, 
        borderBottomWidth: 1, 
        borderColor: "black", 
        fontSize: 20},
    MyCreationText: {
        fontSize: 20},
    MyCreation:{
        flexDirection: "row", 
        justifyContent: "space-between", 
        padding:15, 
        borderBottomWidth: 1, 
        borderColor: "black"}
})