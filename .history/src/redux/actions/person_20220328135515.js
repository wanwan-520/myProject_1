import {ADD_PERSON} from '../constant'

//创建增加一个人的action的动作对象
export const createA = personObj=>({
    type:ADD_PERSON,
    data:personObj
})