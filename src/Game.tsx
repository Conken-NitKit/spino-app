import React, { useState } from "react";
import { dummyText } from "./dummys/dummytext";
import styled from "styled-components";


const Container = styled.div`
    @import url('http://fonts.googleapis.com/earlyaccess/notosansjp.css');
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Header = styled.div`
    height: 54px;
    width: 100vw;
    margin-bottom: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
    @media screen and (max-width: 767px) {
        margin-bottom: 20px;
    }
`;

const QuestionNumText = styled.h1`
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    color: #59B4C8;
    text-align: center;
`;

const TweetBox = styled.div`
    display: flex;
    margin: 20px 0 0 40px;
    @media screen and (max-width: 767px) {
        margin: 10px 0 0 5px;
    }
`;

const HumanIcon = styled.img`
    height: 68px;
    width:  68px;
    border-radius: 50%;
`;

const VerticalLine = styled.div`
    height: 160px;
    width: 6px;
    margin: 10px 0 0 31px;
    background-color: #D9D9D9;
`;

const Text = styled.p`
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    margin-left: 20px;
    font-size: 30px;
    @media screen and (max-width: 767px) {
    font-size: 25px;
    }
`;

const TextArea = styled.textarea`
    height: 200px;
    width: calc(85vw - 64px);
    background-color: #F9F9F9;
    font-size: 24px;
    font-family: 'Noto Sans JP', sans-serif;
    margin-left: 20px;
    resize: none;
    border: none;
    outline-color: #D9D9D9;
`;

const Sending = styled.button`
    height: 40px;
    width: 120px;
    margin: 40px 100px 0 0;
    float: right;
    background-color: #59B4C8;
    font-size: 20px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    border: none;
    &:hover {
        border: 2px solid rgba(89, 180, 200, 0.7);
        box-sizing: border-box;
        box-shadow: 0px 10px 10px rgba(89, 180, 200, 0.25);
        background-color: #98D2DF;
  }
  @media screen and (max-width: 767px) {
      margin: 20px auto;
    }
`;

const twiiterText: string[] = dummyText;

const Game = () => {
    const [questionNum, setQuestionNum] = useState<number>(0);
    const [question, setQuestion] = useState<string>(twiiterText[questionNum]);
    const [form, setForm] = useState<string>("");

    //nowTime = (Date.now() - startTime) / 1000
    const [missCount, setMissCount] = useState<number>(0);
    //正解不正解の判定(consoleに表示)

    const result = () => {
        if (form === question) {
            console.log("正解");
            setQuestionNum(questionNum + 1);
            setQuestion(twiiterText[questionNum + 1]);
            setForm("");
        } else { 
            console.log("不正解");
            setMissCount(missCount + 1);          
        }
    }
      
    return (
        <Container>
            <Header>
                <QuestionNumText>{questionNum + 1}問目</QuestionNumText>
            </Header>
            <div>{missCount}問不正解</div>
            <TweetBox>
                <div>
                    <HumanIcon src="https://pendelion.com/wp-content/uploads/2021/04/712e65b68b3db426ad0e5aebfddecfcb.png" />
                    <VerticalLine />
                </div>
                <div>
                    <Text style={{ color: "#5B5B5B" }}>あなたのツイート</Text>
                    <Text style={{ fontSize: "24px" }}>{question}</Text>
                </div>
            </TweetBox >
            <TweetBox>
                <div>
                    <HumanIcon src="https://pendelion.com/wp-content/uploads/2021/04/712e65b68b3db426ad0e5aebfddecfcb.png" />
                </div>
                <div>
                    <TextArea 
                        placeholder={"入力してください"} 
                        id="form" 
                        value={form} 
                        onChange={(e) => setForm(e.target.value)} 
                        onKeyDown={(e) => {if (e.key === 'Enter') {result()}}}
                    ></TextArea>
                </div>
            </TweetBox>
            <Sending onClick={() => { result() }}>送信</Sending>
        </Container>
    );
}

export default Game;