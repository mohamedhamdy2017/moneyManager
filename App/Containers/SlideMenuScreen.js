import React, { Component } from 'react'
import { TouchableOpacity, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Container,Content, Header, Right, Left, Title, Body } from 'native-base'
import { Switch }  from 'react-native-base-switch';
import images from '../Themes/Images'


// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SlideMenuScreenStyle'

class SlideMenuScreen extends Component {
  render () {
    return (
      <Container style={{backgroundColor: '#0c3b87', flex:1}}>
      <Header style={{backgroundColor: '#0c3b87'}}>

        <Left style={{alignItems: 'center', flex: 1}}>
            <Title>Wallet</Title>
        </Left>

        <Right >
          <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('DrawerClose')}
          >
          <Image
            source = {images.drawer}
            style={{width:20, height:20, justifyContent:'flex-start'}}
          />
          </TouchableOpacity>
        </Right>

        
      
      </Header>
      <Content contentContainerStyle={{alignItems: 'flex-start', marginLeft:30}}>
        <Title style={{color: '#3d92fe', fontSize: 12, marginTop: 30}}>ACCOUNT</Title>
        <Title style={{color: '#fff', fontSize: 18, marginBottom:10, fontStyle: 'italic'}}>Login</Title>
        <Title style={{color: '#fff', fontSize: 18, fontStyle: 'italic'}}>Create Account</Title>
        <Title style={{color: '#3d92fe', fontSize: 12, marginTop: 50}}> SETTINGS </Title>
        <View style={{alignItems: 'flex-end', flex:1, flexDirection: 'row', marginBottom: 20}}>
          <Text style={{color: '#fff', fontSize: 18, fontStyle: 'italic', marginRight: 100}}>Currency</Text>
          <Text style={{color: '#15b9dd', fontSize: 18, marginRight: 130, fontStyle: 'italic'}}>USD -$</Text>
        </View>
        <Title style={{color: '#fff', fontSize: 18, marginBottom: 20, fontStyle: 'italic'}}>Categories </Title>
        <View style={{alignItems: 'flex-end', flex:1, flexDirection: 'row', marginBottom: 20}}>
          <Text style={{color: '#fff', fontSize: 18, fontStyle: 'italic'}}>Start of Month</Text>
          <Text style={{color: '#fff', fontSize: 18, fontStyle: 'italic'}}>Sounds</Text>
        </View>
        <View style={{alignItems: 'flex-end', flex:1, flexDirection: 'row', marginBottom: 20}}>
          <Text style={{color: '#fff', fontSize: 18, marginRight: 130, fontStyle: 'italic'}}>Sounds</Text>
          <Switch  />
        </View>
        <View style={{alignItems: 'flex-end', flex:1, flexDirection: 'row', marginBottom: 20}}>
          <Text style={{color: '#fff', fontSize: 18, marginRight: 75, fontStyle: 'italic'}}>Passcode lock</Text>
          <Switch />
        </View>
        <Title style={{color: '#3d92fe', fontSize: 12, marginTop: 30}}>DATA</Title>
        <Title style={{color: '#fff', fontSize: 18, marginBottom:10, fontStyle: 'italic'}}>Backup</Title>
        <Title style={{color: '#fff', fontSize: 18, fontStyle: 'italic'}}>Restore Backup</Title>
        <Title style={{color: 'red', fontSize: 18, marginVertical: 150, fontStyle: 'italic'}}>Reset All Records</Title>
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
