import {useState} from "react";
import styled from "styled-components"
import "@fontsource/pt-serif"
import { twippyApi } from "../apis/api";
import { useSetRecoilState } from "recoil";
import { dataState } from "../grobalStates/atoms";
import { useHistory } from "react-router";

const Page = styled.div`
    justify-content: center;
    width: auto;
    text-align: center;
    font-size: 100%;
`;

const TitleStyle = styled.h1`
    font-family: 'PT Serif';
    font-style: normal;
    margin-top: 150px;
    font-size: 650%;
    color: #59B4C8;
`;

const ContentStyle = styled.p`
     font-family: 'Roboto';
     font-weight: medium;
     font-style: normal;
     font-size: 100%;
     font-weight: bold;
     line-height: 28.13px;
     color: #333333;
     white-space: pre;
     margin-bottom: 50px;
     @media screen and (max-width: 767px) {
        font-size: 60%;
        margin-top: -10px;
     }
`;

const UserName = styled.input`
    width: 40%;
    height: 40px;
    font-size: 20px;
    display: block;
    margin: 0 auto;
    border: solid 1px #59B4C8;
    border-radius: 1px;
    outline-color: #59B4C8;
    @media screen and (max-width: 767px) {
        width: 60%;
    }
    
`

const StartButton = styled.button`
    display: inline-block;
    margin: 0 auto;
    margin-top: 45px;
    font-weight: 600;
    width: 20%;
    height: 70px;
    font-size: 25px;
    border: none;
    border-radius: 1px;
    color: #F0F0F0;
    background-color: #59B4C8;
    @media screen and (max-width: 767px) {
        width: 35%;
        margin-top: 30px;
    }
    &:hover {
        opacity: 0.5;
    }
`;

const Login:React.VFC = () => {
    const [uname, setUname] = useState("")
    const setTweetData = useSetRecoilState(dataState);
    const history = useHistory()

    const certification = async () => {
        try {
            const fetchedTweet = await twippyApi.filterdTimeline(uname)
            setTweetData(fetchedTweet)
            history.push("/game")
        } catch (e) {
            window.alert("ユーザーが確認できませんでした。スクリーンネームが間違っていないか再度確認してください")
        }
    }

    return (
        <Page>
            <TitleStyle>
                twippy
            </TitleStyle>
            <ContentStyle>
                twitterのスクリーンネームを入力してください。（例: @Hackz_team）<br />
                最近のツイートからランダムで 5問 タイピングゲームが出題されます。<br />
                送信は Ctrl + Enter パスは Shift + Enter でも実行できます。
            </ContentStyle>
            <UserName 
                autoFocus
                placeholder="ユーザー名を入力" 
                onChange={(e)=> setUname(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && e.ctrlKey){
                    certification()
                }}}
                />
            <StartButton onClick={() => {
                localStorage.setItem("uname",uname)
                certification()
            }}
            >
            {"ゲームを始める(Ctrl+Enter)"}
            </StartButton>
        </Page>
    );
}

export default Login;