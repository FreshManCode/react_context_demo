import React from 'react'
import {Consumer} from '../App'

function SonTest(props) {
    return (
        <Consumer >
            {
                (value)=> <div style={{border:"1px solid purple",width:"40%",margin:'50px auto',textAlign:'center'}}>
                    这是SonTest:<p style={{color:'red',display:'inline'}}>{value}</p>
                </div>
            }

        </Consumer>
    )
}

export default SonTest;