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

  export default class DetailEp extends Component{
    
    constructor(){
        super();
        this.state = {
          chapter: [{
            image: 'https://docs.google.com/uc?export=view&id=0B7Q8F0Dl094HT0hidnJDY0hGSkU'
        }, {
            image: 'https://docs.google.com/uc?export=view&id=0B7Q8F0Dl094HLTNHc0FmcHJnck0'
        }, {
            image: 'https://docs.google.com/uc?export=view&id=0B7Q8F0Dl094HMWg1dlJJQ09wN1E'
        },
        ],
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
       
        <View style={styles.AllCon}> 
            <FlatList
              data = {this.state.chapter}
              keyExtractor = {item => item.id}
              renderItem = {({item}) => 
              <View key={item.image}>
                  <Image style={styles.AllImg} source={{ uri: item.image }} />
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
    AllCon: {
      margin: 15, 
      marginTop: 0},
    AllImg: { 
      width: 380, 
      height: 500, 
      }
  })