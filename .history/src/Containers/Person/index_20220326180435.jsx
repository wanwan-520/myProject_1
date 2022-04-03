import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <div>
          <input ref={c=>this.nameNode = c} type="text" placeholder='输入名字' />
          <input ref={c=>this.ageNode = c} type="text" placeholder='输入年龄' />
          <button onClick={this.addPerson}></button>
          <ul>
              <li>名字1-年龄1</li>
              <li>名字2-年龄2</li>
              <li>名字3-年龄3</li>
          </ul>

      </div>
    )
  }
}
