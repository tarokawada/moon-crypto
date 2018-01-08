import React from 'react'
import { View, Text } from 'react-native'

class MainCard extends React.Component {
  render() {
    return(
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          padding: 16,
          borderRadius: 4,
          backgroundColor: 'white'
        }}>
        <View style={{flex: 0.5}}>
          <Text style={{fontSize:14, fontFamily:'agane55'}}>Portfolio Gain</Text>
          <Text style={{fontSize:18, fontFamily:'agane75', color:'#0FCD42', marginTop:5}}>20%</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={{fontSize:14, fontFamily:'agane55'}}>24hr Difference</Text>
          <Text style={{fontSize:18, fontFamily:'agane75', color:'#C94151', marginTop:5}}>20%</Text>
        </View>
      </View>
    )
  }
}

export default MainCard