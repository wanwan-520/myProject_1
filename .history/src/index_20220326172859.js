import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

//将组件渲染到页面中
ReactDOM.render(

<Provider>
<store/>
<App/>
</Provider>,

document.getElementById('root')
)
