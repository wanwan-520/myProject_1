//引入count中的ui组件
import CountUI from '../../Components/Count'
//引入redux组件
import store from '../../redux/store'
//引入connect用于连接ui组件与redux组件
import {connect} from 'react-redux'

//a函数的返回值作为状态传递给了ui组件
function a() {

}





export default connect()(CountUI)


