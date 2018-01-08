import React from 'react'
import { Header, Icon } from 'react-native-elements'
import SvgUri from 'react-native-svg-uri'

const SecondaryNav = props => {
  return (
    <Header 
      leftComponent={<Icon name='arrow-back' color='#d8d8d8' onPress={props.goBack} />}
      centerComponent={{text: props.title, style:{color: '#d8d8d8'}}} 
      backgroundColor='#4b4b4b'
    />
  )
}

export default SecondaryNav