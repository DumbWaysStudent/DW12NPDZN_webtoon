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
  Left,
  Body,
  Right,
  Title,
  Footer,
  Fab,
  FooterTab,
  Icon,  
  } 
  from 'native-base';
import { StyleSheet, ScrollView, Dimensions, FlatList, Image} from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

  export default class MyCreation extends Component{

    constructor(){
        super();
        this.state = {
            active: false,
            MyCreation: [{
                title: 'Tokyo Ghoul',
                eps:'10 episode(s)',
                image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5319-SeriesHeaders_TKG_2000x800_REV.jpg'
            }, {
                title: 'Astra Lost in Space',
                eps:'100 episode(s)',
                image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5806-SeriesHeaders_Astra_2000x800.jpg'
            }, {
                title: 'Bakuman',
                eps:'50 episode(s)',
                image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5487-Tier04_SeriesHeaders_BAK_v2_2000x800.jpg'
            }, {
                title: 'Blue Exorcist',
                eps:'20 episode(s)',
                image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5392-SeriesHeader_Tier02_BEX_2000x800.jpg'
            }, {
                title: 'The Promised Neverland',
                eps:'40 episode(s)',
                image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5868-SeriesHeaders_PromisedNeverland_2000x800.jpg'
            }, {
                title: 'Assassination Classroom',
                eps:'70 episode(s)',
                image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5342-SeriesHeaders_Tier01_ASC_v2_2000x800.jpg'
            }],  
        }}

    static navigationOptions = ({ navigation }) => {
        return {
            title: "My Creation",
            headerStyle: {
                backgroundColor: '#32cd32',
                },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            };
        }

    render(){
        return(
        <Container>
            <View style={{ flex: 1 }}> 
                <Fab
                    style={{ backgroundColor: '#bb2124' }}
                    position="bottomRight"
                    >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateWebtoon')}>
                    <Icon type="FontAwesome" name="plus" style={{fontSize:35, color: 'white'}} />
                </TouchableOpacity>    
                </Fab>
            <Content style={styles.Content}>
              <View style={styles.AllCon}>    
                <FlatList
                data = {this.state.MyCreation}
                keyExtractor = {item => item.id}
                renderItem = {({item}) => 
                <View style={styles.AllCont} key={item.image}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditWebtoon',{
                      title: item.title
                    })}>
                      <Row>
                      <Image style={styles.AllImg} source={{ uri: item.image }} /> 
                      <View style={styles.AllDes}>
                          <Text style={styles.AllTitle}>{item.title}</Text>
                          <Text style={styles.AllStar}>{item.eps}</Text>
                      </View>
                      </Row>  
                    </TouchableOpacity>        
                </View>
                }/>  
              </View>
            </Content>
            </View>
            
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
    BBIcon: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 24,
      marginRight:20
      },
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

