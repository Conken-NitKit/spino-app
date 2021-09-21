import React from "react";
import { reduceEachLeadingCommentRange } from "typescript";
import styled from "styled-components"

const Page = styled.div `
    
`;

const TitleStyle = styled.h1`
    width: 235px;
    height: 200px;
    font-family: PT Serif;
    font-style: normal;
    font-size: 36px;
    line-height: 95px;
    color: #59B4C8;
`;

 const ContentStyle =  styled.p`
     font-family: Roboto;
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
            <ContentStyle>
                twitterのスクリーンネームを入力してください。（例:  @tokotoko5_24）<br />
                最新のツイート１０件からタイピングゲームが生成されます。
            </ContentStyle>
            <input  />
            <button>
                ゲームを始める
            </button>
        </div>
    );
}

export default Login;