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
import { StyleSheet, ScrollView, Dimensions, Image} from 'react-native'
import Carousel from 'react-native-banner-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import config from '../../config-env'

  export default class ForYou extends Component{
    BannerWidth = Dimensions.get('window').width;
    constructor(props){
        super(props);
        this.state = {
          token: '',
          sketches: [],
          favorites: [],
          keyword: '',
          id: null
          
        }}
    

    async componentDidMount(){
      await this.getToken()
      await this.getId()
      this.showSketches()
      this.showFavorite()
      console.log(config.API_URL)
    }

    async getToken () {
      await AsyncStorage.getItem('token').then(key=>
        this.setState({
          token: key
        }))
    }

    async getId () {
      await AsyncStorage.getItem('id').then(key=>
        this.setState({
          id: JSON.parse(key)
        }))
    }

    showSketches = () => {
      axios({
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${this.state.token}`
        },
        url: `${config.API_URL}/sketches`
      }).then(res => {
        const sketches = res.data
        console.log(sketches)
        this.setState({sketches})
      })

    }

    showFavorite = () => {
      axios({
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${this.state.token}`
        },
        url: `${config.API_URL}/user/${this.state.id}/favorites`
      }).then(res => {
        const favorites = res.data
        this.setState({favorites})
        console.log(this.state.favorites)
      })

    }   

    // createFav = (id) => {
 
    //   axios({
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json',
    //       'authorization': `Bearer ${this.state.token}`
    //     },
    //     url: `http://192.168.43.122:5001/api/v1/user/${this.state.id}/favorite`,
    //     data: {
    //       sketch_id: id ,
    //     }
    //   }).then(this.showFavorite())
    // }

    render(){    
      return(
        <Container>
         <Header searchBar rounded style={styles.Header}>
          <Item rounded>
            <Input placeholder="Search" onChangeText={keyword =>this.setState({keyword})}/>
            <Icon name="search" style={styles.HeaderIcon} 
            onPress={() => this.props.navigation.navigate('SearchWebtoon', {     
              keyword: this.state.keyword,
            })}
            />
          </Item>
        </Header>

        <Content style={styles.Content} >

        <View >
          <Carousel 
            autoplay
            autoplayTimeout={3000}
            loop  
            pageSize={this.BannerWidth}      
          >
            {this.state.sketches.map((image)=> (
            <View style={styles.Carousel} >
              <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DetailWebtoon', {
                  
                  detail: image.image,
                  title: image.title,
                  skId: image.id
                })}
                >
                <Image style={styles.CarouselImg} source={{ uri: image.image }} /> 
              </TouchableOpacity> 
            </View>
            ))}
          </Carousel>  
        </View>
        
        <View style={styles.ScrollView}>
          <Text style={styles.Fav}>Favourite</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {this.state.favorites.map((image)=> (   
            <View style={styles.ScrollViewCon} >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DetailWebtoon', {
                 
                  detail: image.sketchId.image,
                  title: image.sketchId.title,
                  skId: image.sketchId.id
                })}
                >
                <Image style={styles.ScrollViewImg} source={{ uri: image.sketchId.image }} />
                <Text>{image.sketchId.title}</Text>
                </TouchableOpacity>         
            </View>))}
          </ScrollView>    
        </View>
        <View style={styles.AllCon}>
            <Text style={styles.All}>All</Text>
            {this.state.sketches.map((image)=> (
            <View style={styles.AllCont} >  
                <Row>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DetailWebtoon', {
                   
                    detail: image.image,
                    title: image.title,
                    skId: image.id
                  })}
                    >
                  <Image style={styles.AllImg} source={{ uri: image.image }} />
                </TouchableOpacity>
                  <View style={styles.AllDes}>
                    <Text style={styles.AllTitle}>{image.title}</Text>
                     <Button warning small style={styles.AllButton}>
                        <Text style={styles.AllFav}>+ Favorite</Text>
                     </Button>        
                  </View>
                </Row>  
            </View>))}                
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
    Carousel: {
      flex:1, 
      alignSelf: 'center'},
    CarouselImg: { 
      width: 380, 
      height: 250, 
      borderWidth: 2, 
      borderColor:'black',},
    ScrollView: {
      margin: 15},
    Fav: {
      marginBottom: 7, 
      fontWeight: 'bold', 
      fontSize: 20},
    ScrollViewCon: {
      flex:1, 
      marginRight:8, 
      alignSelf: 'center', 
      width:120},
    ScrollViewImg: { 
      width: 120, 
      borderWidth: 2, 
      borderColor:'black', 
      height: 120, 
      marginBottom: 5 },
    AllCon: {
      margin: 15, 
      marginTop: 0},
    All: {
      marginBottom: 7, 
      fontWeight: 'bold', 
      fontSize: 20},
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
      marginBottom: 5, },
    AllButton: {
      width:110, },
    AllFav: {
      fontSize:12,
      color:'black', 
      fontWeight: 'bold'},
    


  })