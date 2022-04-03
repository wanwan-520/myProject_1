import React, { Component } from 'react'

import store from '../../redux/store'
export default class Count extends Component {



increment=()=>{
   const {value} = this.selectNumber
   store.dispatch({type:'increment',data:value*1})
}

decrement=()=>{
    //减法
    const {value} = this.selectNumber

    store.dispatch({type:'increment',data:value*1})
}

incrementOdd=()=>{
    const {value} = this.selectNumber
    const 
    if(count%2!==0){
      store.dispatch({type:'increment',data:value*1})
    }
}

incrementAsync=()=>{
    const {value} = this.selectNumber

    setTimeout(()=>{
      store.dispatch({type:'increment',data:value*1})
    },500)
}



  render() {
    return (
      <div>
         <h1>当前求和的结果为:{store.getState()}</h1>
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
