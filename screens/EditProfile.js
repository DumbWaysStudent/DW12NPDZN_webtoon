import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
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
import ImagePicker from 'react-native-image-picker';

export default class EditProfile extends React.Component {
 

  constructor(props) {
    super(props);
    this.state = {
        pic: this.props.navigation.getParam('pic'),
        username: this.props.navigation.getParam('username'),
        avatarSource: null,
    }

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        this.setState({
          avatarSource: source,
          
        });
      }
    });
  }


  render() {
    return (
      <Container>
          <Header searchBar rounded style={styles.Header}>
            <Left>
            </Left>
            <Body>
                <Title style={styles.BB}>Edit Profile</Title>
            </Body>
            <Right>
                <Button transparent 
                onPress={() => this.props.navigation.navigate('Profile',{
                    newPic: this.state.avatarSource,
                    newUsername: this.state.username
                })}>
                <Icon type="Entypo" name='check' style={styles.BB}/>
                </Button>
            </Right>
            </Header>
          <Content>
          <View style={styles.container}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View
                style={[styles.avatar, styles.avatarContainer]}>
                {this.state.avatarSource === null ? (
                <Image style={styles.avatar} source={{uri:this.state.pic }} />
                ) : (
                <Image style={styles.avatar} source={this.state.avatarSource} />
                )}
                
            </View>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TextInput 
            ref={ref => this.textInputRef = ref}
            placeholder='Username'
            onChangeText={username => this.setState({ username })}
            value = {this.state.username}
            style={styles.textInputStyle}
            />
        </View>
          </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "limegreen",
    },
  BB: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 21
    },
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    height: 200,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '80%',
    fontSize:17,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    borderRadius: 7,
    marginTop: 12,
    marginHorizontal: 2
  },
});