import React from 'react'
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation'
import DatePickerScreen from '../Containers/DatePickerScreen'
import AddNewIncomeScreen from '../Containers/AddNewIncomeScreen'
import AddNewExpenseScreen from '../Containers/AddNewExpenseScreen'
import SlideMenuScreen from '../Containers/SlideMenuScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import ChartScreen from '../Containers/ChartScreen'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const MainNav = StackNavigator({
  launch: { 
    screen: LaunchScreen 
  },
  income: {
    screen: AddNewIncomeScreen
  },
  expense: {
    screen: AddNewExpenseScreen
  },
},{
  headerMode: 'none',
  initialRouteName: 'income'
})


const PrimaryNav = DrawerNavigator({
  //DatePickerScreen: { screen: DatePickerScreen },
  
  main: {
    screen: MainNav 
  },
  menu: {
    screen:SlideMenuScreen
  }
},{
  DrawerNavigator : ({
    SlideMenuScreen
  })
})


export default PrimaryNav
