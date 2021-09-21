import React, { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
    @import url('http://fonts.googleapis.com/earlyaccess/notosansjp.css');
    font-family: "Noto Sans Japanese", sans-serif;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(89, 89, 89, 0.7);
`;

const ModalBox = styled.div`
    height: 400px;
    width: 600px;
    margin: 50vh auto 0;
	transform: translateY(-50%);
    background-color: white;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 767px) {
        height: 200px;
        width: 300px;
    }
`;

const Title = styled.h1`
    position: relative;
    top: 12px;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 2em;
    color: white;
    background-color: #59B4C8;
    @media screen and (max-width: 767px) {
        font-size: 12px;
    }
`;

const PointCallText = styled.p`
    margin-top: 54px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    @media screen and (max-width: 767px) {
        margin-top: 22px;
        font-size: 10px;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Box = styled.div`
    text-align: center;
`;

const MeasuredText = styled.p`
    margin: 4px auto;
    font-size: 16px;
    font-weight: 800;
    color: #5AA1C9;
    @media screen and (max-width: 767px) {
        margin: 2px auto;
        font-size: 10px;
    }
`;

const CountText = styled.p`
    margin: 0 auto;
    font-size: 40px;
    font-weight: 800;
    @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`;

const Button = styled.button`
    height: 40px;
    width: 240px;
    margin-top: 20px;
    border: 2px solid #59B4C8;
    background-color: white;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600;
    color: #59B4C8;
    &:hover {
        border: 2px solid rgba(89, 180, 200, 0.7);
        box-sizing: border-box;
        box-shadow: 0px 10px 10px rgba(89, 180, 200, 0.25);
        background-color: #98D2DF;
        color: white;
  }
  @media screen and (max-width: 767px) {
        height: 30px;
        width: 120px;
        margin-top: 10px;
        font-size: 12px;
    }
`;

type Props = {
    missCount: number;
    skipCount: number;
    time: number;
}

const Modal: React.FC<Props> = ({ missCount, skipCount, time }) => {
    let point = 100 - (20 * skipCount) - (8 * missCount) - (time / 2);
    if (point <= 0) point = 0;
    const evaluation = (evaluation: number) => {
        if (evaluation === 0) {
            return "残念！　でもあきらめちゃいけない！　君の夏休みをもう一度！"
        }
        else if (evaluation === 3) {
            return "3点を取るのは逆に難しい！ 開発者が好きな数です！"//イースターエッグ
        }
        else if (0 < evaluation && evaluation < 3) {
            return evaluation + "点を取るのは逆に難しい！　もう一度夏休みを復習しよう！"
        }
        else if (3 < evaluation && evaluation < 11) {
            return evaluation + "点を取るのは逆に難しい！　もう一度夏休みを復習しよう！"
        }
        else if (10 < evaluation && evaluation < 21) {
            return evaluation + "点!　まだまだいけるさ！　夏休みの思い出をしっかりと振り返ろう！"
        }
        else if (20 < evaluation && evaluation < 31) {
            return evaluation + "点！　正直コメントしずらいぞう！　来年も夏休みを楽しもう！"
        }
        else if (30 < evaluation && evaluation < 41) {
            return evaluation + "点！　君ならもっとできる！　夏休みもそう言ってる！"
        }
        else if (40 < evaluation && evaluation < 51) {
            return evaluation + "点！　もうちょっとで四捨五入したら１００点！　夏休みは終わるけど、人生はこれからさ！"
        }
        else if (50 < evaluation && evaluation < 61) {
            return evaluation + "点！　twippyで赤点！　夏休みは満点！"
        }
        else if (60 < evaluation && evaluation < 71) {
            return evaluation + "点！　赤点回避！　きっと、夏休みも喜んでるさ！"
        }
        else if (70 < evaluation && evaluation < 81) {
            return evaluation + "点！　凄い！　夏休みを十分に満喫しているぞ！"
        }
        else if (80 < evaluation && evaluation < 91) {
            return evaluation + "点！　素晴らしい！　この辺りが現実的な最高点だ！　おめでとう！"
        }
        else if (90 < evaluation && evaluation < 100) {
            return evaluation + "点！　もう何も言うことはない！　夏休みなんかメじゃないさ！"
        }
        else if (evaluation === 100) {
            return evaluation + "点！　ズルはいけない！　でもよくできたね！　最高！"
        }
        else {
            return "hoge"
        }
    }

    //html
    return (
        <Background>
            <ModalBox>
                <Title>お疲れ様でした！</Title>
                <PointCallText>あなたの点数は<span style={{ fontSize: "3em", color: "#0F609A", padding: "0 10px" }}>{point}pt</span>です！！</PointCallText>
                <p>{evaluation(point)}</p>
                <Container>
                    <Box>
                        <MeasuredText>ミスした数</MeasuredText>
                        <CountText>{missCount}回</CountText>
                        <a href="/">
                            <Button>リトライ</Button>
                        </a>
                    </Box>
                    <Box>
                        <MeasuredText>タイム</MeasuredText>
                        <CountText>{time}秒</CountText>
                        <Button>twitterでつぶやく</Button>
                    </Box>
                </Container>
            </ModalBox>
        </Background>
    );
}

export default Modal;