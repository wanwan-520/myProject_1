import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
         <h1>当前求和的结果为：0</h1>
         <select ref={c=>this.selectNumber}></select>



      </div>
    )
  }
}
