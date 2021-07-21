import React from 'react'

// 引入父组件的Consumer
import { Consumer } from '../App'
// 引入子组件
import Grandson from './grandson'

function Son(props) {
    // Consumer容器,可以拿到上文传递下来的name属性,并可以显示对应值
    return (
        <Consumer>
            {
                (name) =>
                    <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }}>
                        <p>子组件。获取父组件的值:{name}</p>
                        <Grandson />
                    </div>
            }
        </Consumer>
    )
}

export default Son