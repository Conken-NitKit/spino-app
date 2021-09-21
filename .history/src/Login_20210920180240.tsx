import React from "react";
import { reduceEachLeadingCommentRange } from "typescript";
import styled from "styled-components"

const Page = styled.div `
    text-align: center;
    font-size: 100%;
`;

const TitleStyle = styled.h1`
    font-family: PT Serif;
    font-style: normal;
    padding-top: 25%;
    font-size: 36px;
    color: #59B4C8;
`;

 const ContentStyle =  styled.p`
     font-family: Roboto;
     font-style: normal;
     font-size: 15px;
     line-height: 28.13px;
     color: #333333;
`;

const StartButton

const Login = () =>{
    return (
        <Page>
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
        </Page>
    );
}

export default Login;