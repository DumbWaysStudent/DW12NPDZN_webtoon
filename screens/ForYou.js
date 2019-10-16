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
import axios from 'axios'



  export default class ForYou extends Component{
    BannerWidth = Dimensions.get('window').width;
    constructor(){
        super();
        this.state = {
          sketches: [],
          favorites: []
        }}
    
    
    componentDidMount(){
      this.showSketches()
      this.showFavorite()
    }

    showSketches = () => {
      axios({
        method: 'GET',
        url: 'http://192.168.1.82:5001/api/v1/sketches'
      }).then(res => {
        const sketches = res.data
        console.log(sketches)
        this.setState({sketches})
      })

    }

    showFavorite = () => {
      axios({
        method: 'GET',
        url: 'http://192.168.1.82:5001/api/v1/sketches?is_favorite=true'
      }).then(res => {
        const favorites = res.data
        console.log(favorites)
        this.setState({favorites})
      })

    }

    render(){    
      return(
        <Container>
         <Header searchBar rounded style={styles.Header}>
          <Item rounded>
            <Input placeholder="Search" />
            <Icon name="search" style={styles.HeaderIcon}/>
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
            <View style={styles.Carousel} key={image.image}>
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
            <View style={styles.ScrollViewCon} key={image.image}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DetailWebtoon', {
                  detail: image.image,
                  title: image.title,
                  skId: image.id
                })}
                >
                <Image style={styles.ScrollViewImg} source={{ uri: image.image }} />
                <Text>{image.title}</Text>
                </TouchableOpacity>         
            </View>))}
          </ScrollView>    
        </View>
        <View style={styles.AllCon}>
            <Text style={styles.All}>All</Text>
            {this.state.sketches.map((image)=> (
            <View style={styles.AllCont} key={image.image}>  
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
                        <Text style={styles.AllFav}>+ Favourite</Text>
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
      marginRight:15, 
      alignSelf: 'center', 
      width:150},
    ScrollViewImg: { 
      width: 150, 
      borderWidth: 2, 
      borderColor:'black', 
      height: 150, 
      marginBottom: 5 },
    AllCon: {
      margin: 15, 
      marginTop: 0},
    All: {
      marginBottom: 18, 
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