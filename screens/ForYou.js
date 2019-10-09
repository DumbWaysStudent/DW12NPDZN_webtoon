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

  export default class ForYou extends Component{
    BannerWidth = Dimensions.get('window').width;
    constructor(){
        super();
        this.state = {
          banners: [{
            title: 'Tokyo Ghoul',
            image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5319-SeriesHeaders_TKG_2000x800_REV.jpg'
        }, {
            title: 'Astra Lost in Space',
            image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5806-SeriesHeaders_Astra_2000x800.jpg'
        }, {
            title: 'Bakuman',
            image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5487-Tier04_SeriesHeaders_BAK_v2_2000x800.jpg'
        }, {
            title: 'Blue Exorcist',
            image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5392-SeriesHeader_Tier02_BEX_2000x800.jpg'
        }, {
            title: 'The Promised Neverland',
            image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5868-SeriesHeaders_PromisedNeverland_2000x800.jpg'
        }, {
            title: 'Assassination Classroom',
            image: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5342-SeriesHeaders_Tier01_ASC_v2_2000x800.jpg'
        }, 
        ]
          
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

        <Content style={styles.Content} >
        <View >
            <Carousel 
                autoplay
                autoplayTimeout={3000}
                loop  
                pageSize={this.BannerWidth}      
            >
                {this.state.banners.map((image)=> (
                <View style={styles.Carousel} key={image.image}>
                    <Image style={styles.CarouselImg} source={{ uri: image.image }} />
                </View>
                ))}
            </Carousel>
        </View>
        <View style={styles.ScrollView}>
            <Text style={styles.Fav}>Favourite</Text>
            <ScrollView horizontal={true}>
                {this.state.banners.map((image)=> (
                <View style={styles.ScrollViewCon} key={image.image}>
                    <Image style={styles.ScrollViewImg} source={{ uri: image.image }} />
                    <Text>{image.title}</Text>
                </View>))}
            </ScrollView>    
        </View>
        <View style={styles.AllCon}>
            <Text style={styles.All}>All</Text>
            {this.state.banners.map((image)=> (
            <View style={styles.AllCont} key={image.image}>
                <Row>
                  <Image style={styles.AllImg} source={{ uri: image.image }} />
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

        <Footer>
          <FooterTab style={styles.FooterTab}>
            <Button >
              <Icon name="apps" style={styles.FooterButton}/>
            </Button>
            <Button >
              <Icon name="star" style={styles.FooterButton}/>
            </Button>
            <Button>
              <Icon name="person" style={styles.FooterButton}/>
            </Button>
          </FooterTab>
        </Footer>
        
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
    FooterTab: {
      backgroundColor: "limegreen"},
    FooterButton: {
      fontSize: 30,
      color:'white' }


  })