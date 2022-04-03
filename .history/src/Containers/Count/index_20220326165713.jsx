//引入count中的ui组件
import CountUI from '../../Components/Count'
//引入redux组件
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'
//引入connect用于连接ui组件与redux组件
import {connect} from 'react-redux'

//a函数的返回对象中的key作为传递给UI组件props的key，value就作为传递给ui组件props的value--状态
//映射行为与状态
const mapStateToProps = state=> {
 {count:state}
}

//a函数的返回对象中的key作为传递给UI组件props的key，value就作为传递给ui组件props的value--操作状态的方法
//映射操作状态的方法
const mapDispatchToProps(dispatch){
    return {jia:number=>dispatch(createIncrementAction(number)),
           jian:number=>dispatch(createDecrementAction(number)),
           yibu:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    //通知redux执行加法

}
}



export default connect(mapStateToProps,mapDispatchToProps)(CountUI)


