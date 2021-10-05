/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
    /* @import url('https://fonts.googleapis.com/earlyaccess/notosansjp.css'); */
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
    margin-top: 24px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
`;

const Comment = styled.p`
    text-align: center;
    font-family: "Noto Sans Japanese", sans-serif;
    font-size: 16px;
    @media screen and (max-width: 767px) {
        font-size: 8px;
    }
`

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
        font-size: 14px;
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
        margin-top: 3px;
        height: 24px;
        width: 120px;
        font-size: 12px;
    }
`;

type Props = {
    missCount: number;
    skipCount: number;
    time: number;
}

const Modal: React.FC<Props> = ({ missCount, skipCount, time }) => {
    let point = Math.floor(100 - (20 * skipCount) - (8 * missCount) - (time / 2));
    if (point <= 0) point = 0;
    const evaluation = (evaluation: number) => {
        if (evaluation === 0) {
            return "残念！　でもあきらめちゃいけない！　君の夏休みをもう一度！"
        }
        else if (evaluation === 3) {
            return "3点を取るのは逆に難しい！ 開発者が好きな数です！"
        }
        else if (0 < evaluation && evaluation < 3) {
            return evaluation + "点を取るのは逆に難しい！　もう一度夏休みを復習しよう！"
        }
        else if (3 < evaluation && evaluation < 10) {
            return evaluation + "点を取るのは逆に難しい！　もう一度夏休みを復習しよう！"
        }
        else if (9 < evaluation && evaluation < 20) {
            return evaluation + "点!　まだまだいけるさ！　夏休みの思い出をしっかりと振り返ろう！"
        }
        else if (19 < evaluation && evaluation < 30) {
            return evaluation + "点！　正直コメントしずらいぞう！　来年も夏休みを楽しもう！"
        }
        else if (29 < evaluation && evaluation < 40) {
            return evaluation + "点！　君ならもっとできる！　夏休みもそう言ってる！"
        }
        else if (39 < evaluation && evaluation < 50) {
            return evaluation + "点！ 夏休みは終わるけど、人生はこれからさ！"
        }
        else if (49 < evaluation && evaluation < 60) {
            return evaluation + "点！　twippyで赤点！　夏休みは満点！"
        }
        else if (59 < evaluation && evaluation < 70) {
            return evaluation + "点！　赤点回避！　きっと、夏休みも喜んでるさ！"
        }
        else if (69 < evaluation && evaluation < 80) {
            return evaluation + "点！　凄い！　夏休みを十分に満喫しているぞ！"
        }
        else if (79 < evaluation && evaluation < 90) {
            return evaluation + "点！　素晴らしい！　この辺りが現実的な最高点だ！　おめでとう！"
        }
        else if (89 < evaluation && evaluation < 100) {
            return evaluation + "点！　もう何も言うことはない！　夏休みなんかメじゃないさ！"
        }
        else if (evaluation === 100) {
            return evaluation + "点！　ズルはいけない！　でもよくできたね！　最高！"
        }
        else {
            return "hoge"
        }
    }
    const tweetText = "私の記録は" + point.toString() + "ポイントでした! %0Atwippyで最近のツイートを振り返ろう！%0A"
    //html
    return (
        <Background>
            <ModalBox>
                <Title>お疲れ様でした！</Title>
                <PointCallText>あなたの点数は<span style={{ fontSize: "3em", color: "#0F609A", padding: "0 10px" }}>{point}pt</span>です！！</PointCallText>
                <Comment>{evaluation(point)}</Comment>
                <Container>
                    <Box>
                        <MeasuredText>ミスした数</MeasuredText>
                        <CountText>{missCount}回</CountText>
                        <Link to="/">
                            <Button>リトライ</Button>
                        </Link>
                    </Box>
                    <Box>
                        <MeasuredText>タイム</MeasuredText>
                        <CountText>{time}秒</CountText>
                        <a href={`https://twitter.com/intent/tweet?text=${tweetText}&hashtags=twippy&url=http://twitter.com`} target="_blank">
                            <Button>twitterでつぶやく</Button>
                        </a>
                        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
                    </Box>
                </Container>
            </ModalBox>
        </Background>
    );
}

export default Modal;