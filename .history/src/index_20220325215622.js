import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import store from './redux/store'

//将组件渲染到页面中
ReactDOM.render(<App/>,document.getElementById('root'))

store.subscribe(()=>{
    ReactDOM.render(<App></App>)
})