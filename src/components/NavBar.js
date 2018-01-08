import React from 'react'
import { Header, Icon } from 'react-native-elements'
import SvgUri from 'react-native-svg-uri'

const NavBar = props => {
  return (
    <Header 
      leftComponent={<Icon name='menu' color='#d8d8d8' />}
      centerComponent={<SvgUri source={require('../assets/images/MoonHeaderLogo.svg')}/>} 
      rightComponent={<Icon name='add' color='#d8d8d8' onPress={props.addNew}/>}
      backgroundColor='#4b4b4b'
    />
  )
}

export default NavBar