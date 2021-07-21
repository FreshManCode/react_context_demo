import React from 'react'
import Sontest from './sonTest'

import {Provider} from '../App'


function Test() {
    const testValue = 'Test';
    return (
        <Provider value='Test'>
            <div style={{border:"1px solid red",width:"40%",margin:'50px auto',textAlign:'center'}}>
                <p style={{display: 'inline'}}>这里可以进行相关属性数据传递:<p style={{color:"red",display: 'inline'}}>{testValue}</p></p>
                <Sontest />
            </div>
        </Provider>
    )

}

export default Test