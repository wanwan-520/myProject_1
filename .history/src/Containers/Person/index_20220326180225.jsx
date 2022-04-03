import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <div>
          <input type="text" placeholder='输入名字' />
          <input type="text" placeholder='输入年龄' />
          <ul>
              <li>名字1-年龄1</li>
              <li></li>
              <li></li>
          </ul>

      </div>
    )
  }
}
