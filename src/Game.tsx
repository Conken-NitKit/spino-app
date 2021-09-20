import React, {useState, useRef} from "react";
import { dummyText } from "./dummys/dummytext";

const twiiterText : string[] = dummyText;

const Game = () =>{
    const [questionNum, setQuestionNum] = useState<number>(0);
    const [question,setQuestion] = useState<string>(twiiterText[questionNum]);
    const [form, setForm] = useState<string>("");
    const [missCount, setMissCount] = useState<number>(0);
    const textClear = useRef("");
    const successEnter = () => {
        textClear.current;
    };
    //正解不正解の判定(consoleに表示)

    const result = () =>{
        if(form === question){
            console.log("正解");
            setQuestionNum(questionNum + 1);
            setQuestion(twiiterText[questionNum + 1]);
            successEnter();
        } else { 
            console.log("不正解");
            setMissCount(missCount + 1);          
        }
    }
 
    //html
    return(
        <div>
            <h1>{questionNum + 1}問目</h1>
            <div>{missCount}問不正解</div>
            <div>
                ここにはFigmaのリプ風という項目を作ってください。
            </div>
            <h1>{question}</h1>
            <input id="form" onChange={(e)=> setForm(e.target.value)}></input>
            <button onClick={()=> {result()}}>送信</button>
        </div>
    );
}

export default Game;