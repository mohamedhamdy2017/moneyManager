import React, { Component } from 'react'
import { View, Image,ImageBackground, TouchableOpacity, Text , TextInput, KeyboardAvoidingView} from 'react-native'
import { Body, Title, Header, Left, Button  } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import images from '../Themes/Images'
import DatePickerScreen from '../Containers/DatePickerScreen'


// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddNewIncomeScreenStyle'

class AddNewIncomeScreen extends Component {
  render () {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header style ={{backgroundColor: '#0c3b87'}}>
                <Left style={{flex:1}}>
                  <TouchableOpacity
                  onPress = {() => this.props.navigation.navigate('DrawerOpen')}
                  >
                  <Image
                    source = {images.drawer}
                    style={{width:20, height:20}}
                  />
                  </TouchableOpacity>
                </Left>
                <Body style={{paddingRight: 70}}>
                  <Title style={{fontSize: 23, fontWeight: 'bold'}}>Wallet</Title>
                </Body>
                
            </Header>

            <View style={{flexDirection: 'row', marginTop: 30,  justifyContent: 'center'}}>
              <View>    
                <Button 
                  style={{ width: 160, height: 40, borderRadius: 70 ,justifyContent: 'center', alignItems: 'center', backgroundColor: '#42f4c8'}}>
                  <Text style={{color: 'white'}}>INCOME</Text>
                </Button>
              </View>

              <View>    
                <Button 
                  style={{ width: 160, height: 40, borderRadius: 70,borderColor:'gray', borderWidth: 0.5 ,justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff'}}>
                  <Text>EXPENSE</Text>
                </Button>
              </View>
            </View>

            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text style={{color: '#7fffd4', fontSize: 40}}>$45.00</Text>
            </View>


          <KeyboardAvoidingView style={{marginTop: 40}} behavior="padding" enabled>
            <View>
              <TextInput 
               placeholder = "Note"
               style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}
              />
            </View>
               
              <View style={{flexDirection: 'row'}}>
              <DatePickerScreen/>
              </View>
                          
              
              <View style={{flexDirection: 'row'}} >
                <TextInput 
                placeholder = "Category"
                style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}
                
                />
                <View style={{alignItems: "flex-end", flex:1}}>
                  <Image source={images.categorybutton} style={{justifyContent: 'center', marginRight: 10}}/>
                </View>
              </View> 

          </KeyboardAvoidingView>
            
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewIncomeScreen)
