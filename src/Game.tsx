import React, { useState } from "react";
import styled from "styled-components";
import { dummyText } from "./dummys/dummytext";

const Header = styled.div`
    height: 54px;
    width: 100vw;
    margin-bottom: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const QuestionNumText = styled.h1`
    font-weight: bold;
    color: #59B4C8;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    margin: 20px 0 0 40px;
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
    margin-left: 20px;
    font-size: 24px;
`;

const TextArea = styled.textarea`
    height: 200px;
    width: calc(85vw - 64px);
    background-color: #F9F9F9;
    font-size: 24px;
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
    color: #FFFFFF;
    border: none;
    &:hover {
        border: 2px solid rgba(89, 180, 200, 0.7);
        box-sizing: border-box;
        box-shadow: 0px 10px 10px rgba(89, 180, 200, 0.25);
        background-color: #98D2DF;
  }
`;

const twiiterText: string[] = dummyText;

const Game = () => {
    const [questionNum, setQuestionNum] = useState<number>(0);
    const [question, setQuestion] = useState<string>(twiiterText[questionNum]);
    const [form, setForm] = useState<string>("");
    //正解不正解の判定(consoleに表示)

    const result = () => {
        if (form === question) {
            console.log("正解");
            setQuestionNum(questionNum + 1);
            setQuestion(twiiterText[questionNum + 1]);
        } else {
            console.log("不正解");
        }
    }

    //html
    return (
        <div>
            <Header>
                <QuestionNumText>{questionNum + 1}問目</QuestionNumText>
            </Header>
            <Container>
                <div>
                    <HumanIcon src="https://pendelion.com/wp-content/uploads/2021/04/712e65b68b3db426ad0e5aebfddecfcb.png" />
                    <VerticalLine />
                </div>
                <div>
                    <Text style={{ fontSize: "30px" }}>あなたのツイート</Text>
                    <Text>{question}</Text>
                </div>
            </Container >
            <Container>
                <div>
                    <HumanIcon src="https://pendelion.com/wp-content/uploads/2021/04/712e65b68b3db426ad0e5aebfddecfcb.png" />
                </div>
                <div>
                    <TextArea placeholder={"入力してください"} id="form" onChange={(e) => setForm(e.target.value)}></TextArea>
                </div>
            </Container>
            <Sending onClick={() => { result() }}>送信</Sending>
        </div >
    );
}

export default Game;