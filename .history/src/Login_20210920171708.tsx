import React from "react";
import { reduceEachLeadingCommentRange } from "typescript";



const titleStyle = {
    width: '235px',
    height: '200px',
    justifyItems: 'center',
    fontFamily: 'PT Serif',
    fontStyle: 'normal',
    fontSize: '36px',
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
            <div  style={ contentStyle }>
                <p>
                    twitterのスクリーンネームを入力してください。（例:  @tokotoko5_24）<br />
                    最新のツイート１０件からタイピングゲームが生成されます。
                </p>
            </div>
            <input  />
            <button>
                ゲームを始める
            </button>
        </div>
    );
}

export default Login;