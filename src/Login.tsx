import {useState} from "react";
import styled from "styled-components"
import "@fontsource/pt-serif"

const Page = styled.div`
    @import url('http://fonts.googleapis.com/earlyaccess/notosansjp.css%27');
    justify-content: center;
    width: auto;
    text-align: center;
    font-size: 100%;
`;

const TitleStyle = styled.h1`
    font-family: 'PT Serif';
    font-style: normal;
    margin-top: 150px;
    font-size: 600%;
    color: #59B4C8;
`;

const ContentStyle = styled.p`
     font-family: 'Roboto';
     font-weight: medium;
     font-style: normal;
     font-size: 100%;
     line-height: 28.13px;
     color: #333333;
     white-space: pre;
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

const Login = () => {
    const [uname, setUname] = useState("")
    return (
        <Page>
            <TitleStyle>
                twippy
            </TitleStyle>
            <ContentStyle>
                twitterのスクリーンネームを入力してください。（例:  @Hackz_team）<br />
                最新のツイート１０件からタイピングゲームが生成されます。
            </ContentStyle>
            <UserName 
                placeholder="ユーザー名を入力" 
                onChange={(e)=> setUname(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && e.ctrlKey){
                    window.location.href = "./game"
                    localStorage.setItem("uname",uname)}}}
                />
            <StartButton onClick={() => {
                // window.confirm("OKボタンを押したらゲームがスタートします。Control+Enterで改行、Enterで送信ができます。");
                window.location.href = "./game"
                localStorage.setItem("uname",uname)
            }}
            >
                ゲームを始める
            </StartButton>
        </Page>
    );
}

export default Login;