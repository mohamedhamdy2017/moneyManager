import React, { Component } from 'react'
import { TouchableOpacity, Image, ImageBackground, Text, FlatList, View, } from 'react-native'
import { Container,Content, Body, Title, Header, Left, Button } from 'native-base'
import images from '../Themes/Images'
import ChartScreen from './ChartScreen';


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  state ={
    data: [
      {image : images.wallet, name: 'Salary', date: '05/15/1992', price: '$800'},
      {image : images.plane, name: 'Fly to Devslopes HQ', date: '05/15/1992', price: '$150'},
      {image : images.groceries, name: 'Groceries', date: '05/15/1992', price: '$43'},
      {image : images.dollar, name: 'Garage', date: '05/15/1992', price: '$79'},
     
    ]
  }

  renderItem = ({item, index}) => {
    return (
        <View style={[{flexDirection: 'row',alignItems: 'center',  flex: 1 }, index%2==0 ? {backgroundColor: '#fff'}: {backgroundColor:'#f2eded'}]}>
        <Image source={item.image} style={{width:18, height: 18, marginLeft:10, marginRight: 20}}/>
        <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text>{item.date}</Text>
          
        </View>
          <View style={{alignItems: 'flex-end', flex: 1, marginRight: 10}}>
            <Text style={[{fontStyle: 'italic', fontSize: 18}, index%2==0 ? {color: 'green'}: {color:'red'}]}>{item.price}</Text>  
          </View>
        </View>

    )
  }

  renderSeparator = () =>
     <View
       style={{
         height: 0.8,
         width:'100%',
         backgroundColor: 'gray',
       }}
     />
  
  render () {
    
    return (


    <View >
        <View style ={{ backgroundColor: '#0c3b87', height: '70%'}}>
            <Header style ={{backgroundColor: '#0c3b87'}}>
                <Left style={{flex:1}}>
                  <TouchableOpacity
                  onPress = {() => this.props.navigation.navigate('DrawerOpen')}
                  >
                  <Image
                    source = { images.drawer}
                    style={{width:20, height:20}}
                  />
                  </TouchableOpacity>
                </Left>
                <Body style={{paddingRight: 70}}>
                  <Title style={{fontSize: 23, fontWeight: 'bold'}}>Wallet</Title>
                </Body>
                
            </Header>

            <View style={{alignItems: 'center', marginTop: 25}}>
                    <Text style={{color: 'white', fontSize: 10}}>
                      OVERVIEW
                    </Text>
                    <Text style={{color: 'white', fontSize: 40, fontStyle: 'italic'}}>
                      $ 2,587
                    </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 25}}>
                    
              <View style={{flex: 1,alignItems: 'flex-start', marginLeft:30}}>
                      <Text style={{color: 'white', fontSize: 10}}>
                        INCOME
                      </Text>
                      <Text style={{color: 'white', fontSize: 30, fontStyle: 'italic'}}>
                        $879
                      </Text>
              </View>

              <View style={{flex: 1, alignItems: 'center'}} >
                          <Text style={{color: 'white', fontSize: 10}}>
                            EXPENSE
                          </Text>
                          <Text style={{color: 'white', fontSize: 30, fontStyle: 'italic'}}>
                            $567
                          </Text>
              </View>

              <View style={{flex: 1,alignItems: 'flex-end', marginRight:30}}>
                                <Text style={{color: 'white', fontSize: 10}}>
                                  BALANCE
                                </Text>
                                <Text style={{color: '#15b9dd', fontSize: 30, fontStyle: 'italic'}}>
                                  $339
                                </Text>
              </View>
            </View>
            <ChartScreen/>
          </View>
          
          <View>
            <FlatList 
                  data = {this.state.data}
                  renderItem={this.renderItem}
                  ItemSeparatorComponent={this.renderSeparator}
                  keyExtractor= {(item) => item.name}
              />
              <TouchableOpacity style={{flex:1, alignSelf: 'center'}}>
              <ImageBackground 
                source={images.expenseBtn}
                style={{width: 80, height:70}}
              >
                <Text style={{color: '#fff'}}>Add new</Text>
              </ImageBackground>
              </TouchableOpacity>
      

           </View> 


    </View>




    )
  }
}
