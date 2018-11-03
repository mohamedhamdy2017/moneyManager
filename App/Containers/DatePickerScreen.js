import React, { Component } from 'react'
import { View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'

class DatePickerScreen extends Component {
  state ={
    date: ''
  }
  render(){
    return (
      <View>
      <DatePicker
        style={{width: 400}}
        date={this.state.date}
        mode="date"
        placeholderText= "Date"
        placeholderStyle = {{fontSize: 18, alignItems: 'flex-start'}}
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          placeholderStyle: {
            fontSize: 19
          },
          dateIcon: {
            marginRight: 10
          },
          
        }}

        onDateChange={(date) => {this.setState({date: date})}}
      />

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

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerScreen)
