import React, { Component } from 'react'

export default class Count extends Component {


increment=()=>{

}

increment=()=>{
    
}

increment=()=>{
    
}

increment=()=>{
    
}



  render() {
    return (
      <div>
         <h1>当前求和的结果为：0</h1>
         <select ref={c=>this.selectNumber = c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
         </select>&nbsp;
         <button onClick={this.increment}>+</button>&nbsp;
         <button onClick={this.decrement}>-</button>&nbsp;
         <button onClick={this.incrementOdd}>当前奇数求和</button>&nbsp;
         <button onClick={this.incrementAsync}>异步相加</button>&nbsp;

      </div>
    )
  }
}
