//引入count中的ui组件
import CountUI from '../../Components/Count'
//引入redux组件
import store from '../../redux/store'
//引入connect用于连接ui组件与redux组件
import {connect} from 'react-redux'

//a函数的返回对象中的key作为传递给UI组件props的key，value就作为状态传递给了ui组件
function a() {
    return {n:900}
}

function b(){
    return 
}



export default connect(a,b)(CountUI)


