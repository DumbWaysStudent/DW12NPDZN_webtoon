import React, {Component} from 'react';
import {
  Container, 
  Content, 
  View, 
  Text, 
  Form, 
  Item, 
  Input, 
  Button, 
  Icon,  
  } 
  from 'native-base';
import {
  StyleSheet, Image
} from 'react-native'

  export default class Login extends Component{

    constructor(){
      super();
      this.state = {
        icon: "eye-off",
        pass: true,
        isDisabled: true,
        username: "",
        password: null,
        
      }}
    
    changeIcon = () => {
      this.setState(prevState => ({
        icon: prevState.icon === 'eye' ? 'eye-off':'eye',
        pass: !prevState.pass
      }))
    }

    userValidation = (username) => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (reg.test(username) == true && this.state.password != null){
        this.setState({
          username, 
          isDisabled: false,
        })
      } else {
        this.setState({
          username,
          isDisabled: true
      })}
      this.setState({
        username,
        })
      }

      passValidation = (password) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (password != null && reg.test(this.state.username) == true){
          this.setState({
            password,
            isDisabled: false,
          })
        } else {
          this.setState({
            password,
            isDisabled: true
        })}
        this.setState({
          password
          })
        }
  
    render(){
      
      return(
        <Container>
        
        <Content padder >
          
            <View style={styles.title}>
              <Image style={styles.logo} source={require('./logo.png')}/>
              <Text style={styles.login}>Log In</Text>
              <Text>Login with your account WEBTOON</Text>
            </View>
            
            <View style={styles.container}>
              <Form >
                <Text style={styles.label}>Username</Text>
                <Item rounded>
                  <Input 
                  placeholder="" 
                  keyboardType= "email-address" 
                  onChangeText={username =>this.userValidation(username)}
                  />
                </Item>
                <Text style={styles.label}>Password</Text>
                <Item rounded>
                  <Input 
                  secureTextEntry= {this.state.pass} 
                  placeholder="" 
                  onChangeText={password => this.passValidation(password)}
                  />
                  <Icon name={this.state.icon} onPress={()=>this.changeIcon()}/>
                </Item>
              </Form>
              <Button 
              success disabled = {this.state.isDisabled} rounded block style={styles.button}
              onPress={() => this.props.navigation.navigate('ForYou')}
              >
                <Text >Log In</Text>
              </Button>
            </View>

        </Content>
      </Container>
      )
    }
  }

const styles = StyleSheet.create({
  title:{
    alignItems: "center", 
    marginTop:50, 
    marginBottom:20, 
    fontFamily: 'Austin-Light'
  },
  logo:{
    width: 200,
    height: 200
  },
  login: {
    fontSize: 40, 
   
  },
  container: {
    paddingHorizontal: 20
  },
  label: {
    padding: 10,
    fontWeight: 'bold'
  },
  button:{
    marginTop: 25,
  }
})