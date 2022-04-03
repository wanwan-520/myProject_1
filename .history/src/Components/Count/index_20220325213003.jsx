import React, { Component } from 'react'
import
export default class Count extends Component {



increment=()=>{
   const {value} = this.selectNumber
   const {count}  = this.state
   this.setState({count:value*1+count})
}

decrement=()=>{
    //减法
    const {value} = this.selectNumber
    const {count}  = this.state
    this.setState({count:-value*1+count})
}

incrementOdd=()=>{
    const {value} = this.selectNumber
    const {count}  = this.state
    if(count%2!==0){
        this.setState({count:value*1+count})
    }
}

incrementAsync=()=>{
    const {value} = this.selectNumber
    const {count}  = this.state
    setTimeout(()=>{
        this.setState({count:value*1+count})
    },500)
}



  render() {
    return (
      <div>
         <h1>当前求和的结果为:{this.state.count}</h1>
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
