import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
         <h1>当前求和的结果为：0</h1>
         <select ref={c=>this.selectNumber = c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
         </select>&nb
         <button>+</button>
         <button>-</button>
         <button>当前奇数求和</button>
         <button>异步相加</button>

      </div>
    )
  }
}
