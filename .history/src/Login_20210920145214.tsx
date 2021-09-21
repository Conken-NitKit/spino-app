import React from "react";

const titleStyle = {
}

const Login = () =>{
    return (
        <div>
            <h1 style{{}}>
                twippy
            </h1>
            <p>
                twitterのスクリーンネームを入力してください。（例:  @tokotoko5_24）<br />
                最新のツイート１０件からタイピングゲームが生成されます。
            </p>
            <input />
            <button>
                ゲームを始める
            </button>
        </div>
    );
}

export default Login;