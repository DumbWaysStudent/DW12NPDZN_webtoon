import React, {Component} from 'react';
import {
  Container, 
  Content, 
  View, 
  Text, 
  Row,
  Icon,  
  } 
  from 'native-base';
import { StyleSheet, FlatList, Dimensions, Share, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


  export default class DetailWebtoon extends Component{

    constructor(){
        super();
        this.state = {
          details: [{
            ep: 'Ep.6',
            date:'09 October 2019',
            image: 'https://dw9to29mmj727.cloudfront.net/products/1421585278.jpg'
        }, {
            ep: 'Ep.5',
            date:'08 October 2019',
            image: 'https://dw9to29mmj727.cloudfront.net/products/142156954X.jpg'
        }, {
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
            title: navigation.getParam('title'),
            headerStyle: {
                backgroundColor: '#32cd32',
              },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (
                <Icon type="FontAwesome" name="share-alt" style={styles.Share}  
                
                />
              ),
            };
    }

    render(){    
      return(
        <Container>
        <Content style={styles.Content} >
        <View style={styles.BigPictCon}>   
            <Image 
             source={{ uri : this.props.navigation.getParam('detail')}} 
             style={styles.BigPict}
             />                        
        </View>
       
        <View style={styles.AllCon}> 
            <FlatList
              data = {this.state.details}
              keyExtractor = {item => item.id}
              renderItem = {({item}) => 
              <View style={styles.AllCont} key={item.image}>
                <Row>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEp', {
                    title: item.ep
                  })}
                >
                  <Image 
                  style={styles.AllImg} 
                  source={{ uri: item.image }} 
                  />
                </TouchableOpacity>
                  <View style={styles.AllDes}>
                    <Text style={styles.AllEp}>{item.ep}</Text>
                    <Text style={styles.AllDate}>{item.date}</Text>
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
    Share: {
      marginRight:20},
    Content: {
      paddingVertical: 20},
    BigPictCon: {
      flex:1, 
      alignItems:'center', 
      marginBottom: 20},
    BigPict: {
      width: 390, 
      borderWidth:3, 
      borderColor:'black' ,
      height: 250},
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
    AllEp: {
      marginBottom: 5,
      fontWeight:'bold' },
    AllDate: {
      marginBottom: 5, 
      fontSize: 13
    },
  })