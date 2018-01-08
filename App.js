import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import Application from './src/components/Application'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    )
  }
}
