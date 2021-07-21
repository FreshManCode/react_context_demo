import React from 'react'
// 引入父组件的Consumer
import { Consumer } from '../App'
function GrandSon(props) {
    return <Consumer>
        {
            (name) =>
                <div style={{ border: '1px solid green', width: '60%', margin: '50px auto', textAlign: 'center' }}>
                    <p>孙组件。获取传递下来的值:{name}</p>
                </div>

        }
    </Consumer>
}

export default GrandSon;