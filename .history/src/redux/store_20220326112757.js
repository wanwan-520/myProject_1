//引入createStore 专门用于创建redux中的最为核心的store对象
// const store = {}
import {createStore,applyMiddleware} from 'redux'
// 引入为count服务的reducer
import countReducers from './count_reducers'
import thunk from 'redux-'

export default createStore(countReducers)
