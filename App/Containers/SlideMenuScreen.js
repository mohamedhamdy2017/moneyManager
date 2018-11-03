import React, { Component } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { Container,Content, Icon, Button, Header, Left, Title, Body } from 'native-base'
import images from '../Themes/Images'


// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SlideMenuScreenStyle'

class SlideMenuScreen extends Component {
  render () {
    return (
      <Container>
      <Header>
        <Left style={{flex:1}}>
          <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('DrawerOpen')}
          >
          <Image
            source = {images.drawer}
            style={{width:20, height:20, justifyContent:'flex-start'}}
          />
          </TouchableOpacity>
        </Left>
      </Header>
      <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <Text>SlideScreen</Text>
      </Content>
  </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideMenuScreen)
