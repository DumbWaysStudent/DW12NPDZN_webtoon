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


  export default class ForYou extends Component{
    BannerWidth = Dimensions.get('window').width;
    constructor(){
        super();
        this.state = {
          banners: [{
            ep: 'Ep.6',
            date:'09 October 2019',
            image: 'https://image.shutterstock.com/image-illustration/3d-shiny-red-number-collection-260nw-120044446.jpg'
        }, {
            ep: 'Ep.5',
            date:'08 October 2019',
            image: 'https://image.shutterstock.com/image-photo/green-wooden-number-five-without-260nw-1466092421.jpg'
        }, {
            ep: 'Ep.4',
            date:'07 October 2019',
            image: 'https://image.shutterstock.com/image-vector/black-white-abstract-three-dimensional-600w-510933106.jpg'
        }, {
            ep: 'Ep.3',
            date:'06 October 2019',
            image: 'https://image.shutterstock.com/image-illustration/3d-illustration-number-three-polished-600w-1062245048.jpg'
        }, {
            ep: 'Ep.2',
            date:'05 October 2019',
            image: 'https://image.shutterstock.com/image-illustration/glossy-pink-paint-number-2-600w-582499507.jpg'
        }, {
            ep: 'Ep.1',
            date:'04 October 2019',
            image: 'https://image.shutterstock.com/image-illustration/number-one-web-sticker-button-600w-1443474482.jpg'
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
                <Icon type="FontAwesome" name="share-alt" style={styles.Share} />
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
              data = {this.state.banners}
              keyExtractor = {item => item.id}
              renderItem = {({item}) => 
              <View style={styles.AllCont} key={item.image}>
                <Row>
                  <Image style={styles.AllImg} source={{ uri: item.image }} />
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