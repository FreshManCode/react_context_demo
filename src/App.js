import logo from './logo.svg';
import './App.css';
import React from 'react'

import Son from './demo/son'

import Test from './demo/test'

// 创建一个theme Context 
export const {Provider,Consumer} = React.createContext("son");


function App() {
  let name = 'ReactContext上下文测试学习';
  return (
    // Provider 共享容器 接收一个name属性
    <Provider value={name}>
      <div className="App">
        <div style={{ border: '1px solid red', width: '30%', margin: '50px auto', textAlign: 'center' }}>
          <p>父组件定义的值:{name}</p>
          <Son />
        </div>
        <hr/>
        <div style={{border:"1px solid yellow",width:"40%",margin:'50px auto',textAlign:'center'}}>
          <p>Test</p>
          <Test/>
        </div>

      </div>
    </Provider>
  );
}

export default App;
