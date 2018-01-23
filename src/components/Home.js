import React from 'react'
import { Text, 
        View,
        ScrollView,
        StyleSheet } from 'react-native'
import { connect, Provider } from 'react-redux'
import _ from 'lodash'
import NavBar from './NavBar.js'
import MainCard from './MainCard'
import PriceCard from './PriceCard'

class Home extends React.Component {
  static navigationOptions = {
    header: null,
    drawerLabel: 'Home'
  }
  onLearnMore = (coin) => {
    this.props.navigation.navigate('InputTransactions', {...coin});
  }
  render(){
    const { navigate } = this.props.navigation
    const watchList = this.props.watchList
    const watchListArray = Object.keys(watchList).map((coin) => coin)
    return (
      <View style={styles.container}>
        <NavBar addNew={() => navigate('AddNew')} drawer={() => navigate('DrawerToggle')}/>
        <ScrollView style={{ paddingLeft:16, paddingRight:16 }} contentContainerStyle={{paddingVertical: 20}}>
          <MainCard />
          {
            watchListArray.map(coin => {
              return <PriceCard 
                symbol={coin}
                key={coin}
                transactionPage={() => this.onLearnMore({symbol: coin})}
              />
            })
          }
        </ScrollView>
      </View>     
    )
  }
}

const styles = StyleSheet.create(
  {
    container: 
      {
        flex: 1
      }   
  }
)

function mapStateToProps(state) {
  return {
    watchList: state.crypto.watchList,
  }
}

export default connect(mapStateToProps)(Home)