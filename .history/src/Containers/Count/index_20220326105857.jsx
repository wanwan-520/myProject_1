//引入count中的ui组件
import CountUI from '../../Components/Count'
//引入redux组件
import store from '../../redux/store'
//引入connect用于连接ui组件与redux组件
import {connect} from 'react-redux'

//a函数的返回对象中的key作为传递给UI组件props的key，value就作为传递给ui组件props的value--状态
function a(state) {
    return {count:state}
}

//a函数的返回对象中的key作为传递给UI组件props的key，value就作为传递给ui组件props的value--操作状态的方法
function b(){
    return {jia:(data)=>{store.dispa}}
    //通知redux执行加法

}



export default connect(a,b)(CountUI)


