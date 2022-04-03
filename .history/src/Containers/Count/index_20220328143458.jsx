//引入count中的ui组件
import React ,{Component} from 'react'
//引入redux组件
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction } 
from '../../redux/actions/count'
//引入connect用于连接ui组件与redux组件
import {connect} from 'react-redux'

//a函数的返回对象中的key作为传递给UI组件props的key，value就作为传递给ui组件props的value--状态
//映射行为与状态

//a函数的返回对象中的key作为传递给UI组件props的key，value就作为传递给ui组件props的value--操作状态的方法
//映射操作状态的方法
//定义UI组件
class Count extends Component {

	state = {carName:'奔驰c63'}

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.jia(value*1)
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.jian(value*1)
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.jia(value*1)
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.jiaAsync(value*1,500)
	}

	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div>
				<h2>我是Count组件,下方组件总人数为:{this.props.renshu}</h2>
				<h4>当前求和为：{this.props.count}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

export default connect(
    state=>({count:state.he,re}),
 
    //mapDispatchToProps的简写形式
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        yibu:createIncrementAsyncAction
    }


)(Count)


