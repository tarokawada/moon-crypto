import React from 'react'
import { FlatList, Text, StyleSheet } from "react-native"
import { List, ListItem } from 'react-native-elements'
import _ from 'lodash'

const ListWithSub = props => {
  const data = props.list
  const watchList = props.watchList
  return (
    <List
      containerStyle={styles.list}
    >
      <FlatList
          data={props.list}
          renderItem={({item}) => <ListItem 
                                    title={item.name} 
                                    subtitle={item.symbol} 
                                    hideChevron 
                                    switchButton
                                    onSwitch={()=>props.onSwitch(item.symbol)}
                                    switched={ _.has(watchList, item.symbol) }
                                  />}
          keyExtractor={item => item.symbol}
          containerStyle={styles.flatList}
      />
    </List>
  )
}

const styles = StyleSheet.create(
  {
    list: {
      borderTopWidth: 0,
      borderBottomWidth: 0 
    },
    flatList: {
      borderBottomWidth: 0
    }  
  }
)

export default ListWithSub
