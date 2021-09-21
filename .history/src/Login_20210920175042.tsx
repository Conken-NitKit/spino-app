import React from "react";
import { reduceEachLeadingCommentRange } from "typescript";
import styled from "styled-components"



const TitleStyle = styled.h1`
    width: 235px;
    height: 200px;
    display: flex;
    
    font-family: PT Serif;
    font-style: normal;
    font-size: 36px;
    line-height: 95px;
    color: #59B4C8;
`;

 const ContentStyle =  styled.div`
     font-family: Roboto,
     font-style: normal;
     font-size: 24px;
     line-height: 28.13px;
     color: #333333;
`;



const Login = () =>{
    return (
        <div>
            <TitleStyle>
                twippy
            </TitleStyle>
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