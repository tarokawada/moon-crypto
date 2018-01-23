import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MainCard extends React.Component {
  render() {
    return(
      <View
        style={styles.container}>
        <View style={styles.halfContainer}>
          <Text style={styles.titleFont}>Portfolio Gain</Text>
          <Text style={{fontSize:18, fontFamily:'agane75', color:'#0FCD42', marginTop:5}}>20%</Text>
        </View>
        <View style={styles.halfContainer}>
          <Text style={styles.titleFont}>24hr Difference</Text>
          <Text style={{fontSize:18, fontFamily:'agane75', color:'#C94151', marginTop:5}}>20%</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      height: 80,
      padding: 16,
      borderRadius: 4,
      backgroundColor: 'white'
    },
    halfContainer: {
      flex: 0.5
    },
    titleFont: {
      fontSize:14, 
      fontFamily:'agane55'
    },
    infoFont:{
      fontFamily: 'agane75',
      fontSize: 18,
      marginTop: 5
    } 
  }
)

export default MainCard