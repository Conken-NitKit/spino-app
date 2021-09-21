import React, {useState,useRef, useEffect} from "react";
import { dummyText } from "./dummys/dummytext";


const twiiterText : string[] = dummyText;

const Game = () =>{
    const [questionNum, setQuestionNum] = useState<number>(0);
    const [question,setQuestion] = useState<string>(twiiterText[questionNum]);
    const [form, setForm] = useState<string>("");
    //正解不正解の判定(consoleに表示)

    const result = () =>{
        if(form === question){
            console.log("正解");
            setQuestionNum(questionNum + 1);
            setQuestion(twiiterText[questionNum + 1])

        } else { 
            console.log("不正解");
        }
    }
    
    const watch = () =>{
        var timer = document.getElementById('timer');
        var start = document.getElementById('start');
        var stop = document.getElementById('stop');
        var reset = document.getElementById('reset');
        const startTime = new Date();
        var timerId;
        var elapsedTime = 0;
        var timeToadd = 0;
        function updateTimetText(){
            var minus = Math.floor(elapsedTime / 60000);
            var second = Math.floor(elapsedTime % 60000 / 1000);
            var msecond = elapsedTime % 1000;
            timer!.textContent = minus + ':' + second + ':' + msecond;
        }
        function countUp(){
            timerId = setTimeout(function(){
            elapsedTime = Date.now()  + timeToadd;
            updateTimetText()
            countUp();
            },10);
            }
            start!.addEventListener('click',function(){
            countUp();
            });
            stop!.addEventListener('click',function(){
            timeToadd += Date.now() - timeToadd;
            });
            reset!.addEventListener('click',function(){
            elapsedTime = 0;
            timeToadd = 0;
            updateTimetText();
            });
    }
 
    //html
    return(
        <div>
            <h1>{questionNum + 1}問目</h1>
            <div>
                ここではFigmaのリプ風という項目
            </div>
            <h1>{question}</h1>          
            <input id="form" onChange={(e)=> setForm(e.target.value)} 
             onKeyDown={(e) => {if (e.key === 'Enter') {result()}
            }} />
            <button onClick={()=> {result()}}>送信</button>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            <div id="timer">00:00:000</div>
            <button id="start">start</button>
            <button id="stop">stop</button>
            <button id="reset">reset</button>
            <script src="js/main.js"></script>

        </div>
    );
}

export default Game;