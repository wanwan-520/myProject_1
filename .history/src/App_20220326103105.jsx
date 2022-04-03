import React, { Component } from 'react'
import Count  from './Containers/Count'
import store from './redux/'

export default class App extends Component {
  render() {
    return (
      <div>
          <Count/>
      </div>
    )
  }
}
