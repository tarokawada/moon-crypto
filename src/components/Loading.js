import React from 'react'
import { View, Animated, Image } from 'react-native'
// import { DangerZone } from 'expo'
// const { Lottie } = DangerZone

const styles = {
  view: {
    flex:1,
    padding:16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2d2d2d'
  }
}

class Loading extends React.Component {
  // componentDidMount() {
  //   this.animation.play()
  // }
  render(){
    return(
      <View style={styles.view}>
        <Image source={require('../assets/images/MoonLogo.png')}/>
      </View>
    )
  }
}

export default Loading