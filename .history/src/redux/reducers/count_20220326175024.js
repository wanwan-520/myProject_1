//创建一个为count组件服务的reducer,reducer本质就是一个函数
//reducer 会接收到两个参数，分别为之前的状态preState与动作对象action
import { INCREMENT,DECREMENT } from "../constant"


export default function countReducer(preState,action){
    const {type,data} =  action
    //根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState+data
       case de:
       return preState-data
        default:
            return 0
    }
}