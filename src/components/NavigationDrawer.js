
import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Text, View, Image, StyleSheet } from 'react-native'
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
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/MoonLogo.png')}/>
        </View>
        <View style={styles.listContainer}>
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
        <View style={styles.emailContainer}>
          <Text style={{paddingBottom:10, fontFamily: 'agane55', color: '#d8d8d8'}}>{this.props.email}</Text>
        </View>
      </View>
    )
  }
}

const DrawerItem = props => {
  return(
    <View style={styles.listElement}>
      <Text onPress={props.action} style={styles.listFont}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    mainContainer: {flex:1, backgroundColor: '#4b4b4b'},
    logoContainer: {flex: 1, alignItems: 'center',justifyContent: 'center'},
    listContainer: {flex: 6},
    listElement: {alignItems: 'stretch', paddingLeft: 16, paddingTop: 10, paddingBottom: 10},
    listFont: {fontSize: 16, fontFamily: 'agane55', color: '#d8d8d8'},
    emailContainer: {flex:1, justifyContent:'flex-end', alignItems:'center'},
  }
)

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