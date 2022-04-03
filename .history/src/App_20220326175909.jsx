import React, { Component } from 'react'
import Count  from './Containers/Count'
import store from './redux/store'
import 

export default class App extends Component {
  render() {
    return (
      <div>
          <Count store={store}/>
      </div>
    )
  }
}
