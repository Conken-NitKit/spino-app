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
    margin-top: 132px;
    font-size: 36px;
    color: #59B4C8;
`;

 const ContentStyle =  styled.p`
     font-family: Roboto;
     font-weight: 400;
     font-style: normal;
     font-size: 15px;
     line-height: 28.13px;
     color: #333333;
`;

const UserName = styled.input`
    width: 600px;
    height: 25px;
    display: block;
    margin: 0 auto;
    border: solid 1px #59B4C8;
    border-radius: 1px;
`

const StartButton = styled.button`
    display: inline-block;
    margin: 0 auto;
    margin-top: 80px;
    background-color: 
`;

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
            <UserName  />
            <StartButton>
                ゲームを始める
            </StartButton>
        </Page>
    );
}

export default Login;