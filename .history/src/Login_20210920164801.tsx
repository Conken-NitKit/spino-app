import React from "react";
import { reduceEachLeadingCommentRange } from "typescript";



const titleStyle = {
    width: '235px',
    height: '93px',
    paddingLeft: '602px',
    paddingTop: '264px',
    fontFamily: 'PT Serif',
    fontStyle: 'normal',
    fontSize: '72px',
    lineHeight: '95px',
    color:'#59B4C8',
}

const contentStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '28.13px',
    color: '#333333'
}



const Login = () =>{
    return (
        <div>
            <div  style={ titleStyle }>
                <h1>
                    twippy
                </h1>
            </div>
            
            <input  />
            <button>
                ゲームを始める
            </button>
        </div>
    );
}

export default Login;