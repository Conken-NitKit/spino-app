import React from "react";
import styled from "styled-components"

const Page = styled.div `
    justify-content: center;
    width: 100%;
    text-align: center;
    font-size: 100%;
`;

const TitleStyle = styled.h1`
    font-family: 'PT Serif';
    font-style: normal;
    margin-top: 132px;
    font-size: 300%;
    color: #59B4C8;
`;

 const ContentStyle =  styled.p`
     font-family: 'Roboto';
     font-weight: 400o;
     font-style: normal;
     font-size: 17px;
     line-height: 28.13px;
     color: #333333;
`;

const UserName = styled.input`
    width: 50%;
    height: 25px;
    display: block;
    margin: 0 auto;
    border: solid 1px #59B4C8;
    border-radius: 1px;
`

const StartButton = styled.button`
    display: inline-block;
    margin: 0 auto;
    margin-top: 45px;
    width: 30%;
    height: 32px;
    font-size: 80%;
    border: none;
    border-radius: 1px;
    color: #F0F0F0;
    background-color: #59B4C8;
    &:hover {
        opacity: 0.5;
    }
`;

const Login = () =>{
    return (
        <Page>
            <TitleStyle>
                twippy
            </TitleStyle>
            <ContentStyle>
                twitterのスクリーンネームを入力してください。（例:  @Hackz_team）<br />
                最新のツイート１０件からタイピングゲームが生成されます。
            </ContentStyle>
            <UserName  placeholder="@" />
            <StartButton>
                ゲームを始める
            </StartButton>
        </Page>
    );
}

export default Login;