
import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Text, View, Image } from 'react-native'
import { logout } from '../actions/auth'
import SvgUri from 'react-native-svg-uri'

class NavigationDrawer extends React.Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    const listItem = [
      {
        title: 'Home',
        action: this.navigateToScreen('Home')
      },
      {
        title: 'Logout',
        action: this.props.logout
      }
    ]
    return(
      <View style={{flex:1, backgroundColor: '#4b4b4b'}}>
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
          <Image source={require('../assets/images/MoonLogo.png')}/>
        </View>
        <View style={{flex: 6}}>
          {
            listItem.map(item => {
              return <DrawerItem 
                title={item.title}
                action={item.action}
                key={item.title}
              />
            })
          }
        </View>
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
          <Text style={{paddingBottom:10, fontFamily: 'agane55', color: '#d8d8d8'}}>{this.props.email}</Text>
        </View>
      </View>
    )
  }
}

const DrawerItem = props => {
  const styles = {
    list: {
      alignItems: 'stretch',
      paddingLeft: 16,
      paddingTop: 10,
      paddingBottom: 10
    },
    text: {
      fontSize: 16,
      fontFamily: 'agane55',
      color: '#d8d8d8'
    }
  }
  return(
    <View style={styles.list}>
      <Text onPress={props.action} style={styles.text}>{props.title}</Text>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.user.email
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavigationDrawer)