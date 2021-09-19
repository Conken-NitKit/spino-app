import React, {useState} from "react";
import { dummyText } from "./dummys/dummytext";

//問題をランダムに選択
const twiiterText : string[] = dummyText;
const rnd : number = Math.floor(Math.random() * twiiterText.length);
const question : string = twiiterText[rnd];

const Game = () =>{
    const [form, setForm] = useState<string>("")
    //正解不正解の判定(consoleに表示)
    const result = () =>{
        if(form === question){
            console.log("正解");
        } else {
            console.log("不正解");
        }
    }

    //html
    return(
        <div>
            <div>
                ここにはFigmaのリプ風という項目を作ってください。
                
            </div>
            <h1>{question}</h1>
            <input onChange={(e)=> setForm(e.target.value)}></input>
            <button onClick={()=> {result()}}>送信</button>
        </div>
    );
}

export default Game;