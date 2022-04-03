import {ADD_PERSON} from '../constant'

//创建增加一个人的
export const person = personObj=>({
    type:ADD_PERSON,
    data:personObj
})