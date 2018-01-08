import React from 'react'
import { FlatList, Text } from "react-native";
import { List, ListItem } from 'react-native-elements'

const ListWithSub = props => {
  const data = props.list
  const watchList = props.watchList
  return (
    <List
      containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
    >
      <FlatList
          data={props.list}
          renderItem={({item}) => <ListItem 
                                    title={item.name} 
                                    subtitle={item.symbol} 
                                    hideChevron 
                                    switchButton
                                    onSwitch={()=>props.onSwitch(item.symbol, item.id)}
                                    switched={ watchList.includes(item.id) }
                                  />}
          keyExtractor={item => item.symbol}
          containerStyle={{ borderBottomWidth: 0 }}
      />
    </List>
  )
}

export default ListWithSub
