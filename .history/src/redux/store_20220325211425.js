//引入createStore 专门用于创建redux中的最为核心的store对象
// const store = {}
import {createStore} from 'redux'
// 引入为count服务的reducer
import countReducers from '@/redux/count_reducers'

export default createStore(countReducer)
