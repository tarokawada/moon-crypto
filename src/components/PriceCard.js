import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

class PriceCard extends React.Component {
  render() {
    return(
      <View
        style={{
          marginTop: 16,
          flexDirection: 'column',
          padding: 16,
          borderRadius: 4,
          backgroundColor: 'white',
          height: 135
        }}
      >
        <View style={{flexDirection:'row', height: 20}}>
          <Text style={{fontSize:20, fontFamily:'agane75', flex:0.99, color:'#4f4f4f'}}>{this.props.symbol}</Text>
          <Icon name='more-vert' style={{flex:0.01}}/>
        </View>
        <View style={{flexDirection:'row', flex:1, marginTop:10}}>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize:14, fontFamily:'agane55', color:'#4f4f4f'}}>Initial Investments</Text>
            <Text style={{fontSize:18, fontFamily:'agane75',marginTop:5, color:'#4f4f4f'}}>200</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize:14, fontFamily:'agane55', color:'#4f4f4f'}}>Current Value (BTC)</Text>
            <Text style={{fontSize:18, fontFamily:'agane75', color:'#C94151', marginTop:5, color:'#4f4f4f'}}>300</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', flex:1, borderTopColor:'#B7B5B5', borderTopWidth:0.5, margin: -16, marginTop: 16}}>
          <View style={{flex:1, padding:10}}>
            <TouchableOpacity onPress={this.props.transactionPage}>
              <Text style={{fontSize:14, fontFamily:'agane65', textAlign:'center', color:'#4f4f4f'}}>Add Transactions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default PriceCard