import {ADD_PERSON} from '../constant'

//创建一个
export const person = personObj=>({
    type:ADD_PERSON,
    data:personObj
})