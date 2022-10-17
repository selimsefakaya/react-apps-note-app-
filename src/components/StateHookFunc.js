// çalışması için webpack.config dosyasına state-hook.js dosyasını gönderiyoruz.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StateHookFunc = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);

    useEffect(() => {
        //componentDidMount ve componentDidUpdate kullanılmış olur.
        console.log("use Effect");
        console.log("component did mount & component did update");
    });

    useEffect(() => {
        //Yalnızca didMount olunca çalışmasını istersek.
        console.log("component did mount");

        // Count bilgisini local storage üzerinden alıp, eğer öyle bir bilgi varsa uygulama yüklenince setCount fonksiyonu ile count değerine eşitleyelim:
        const countLocal = localStorage.getItem("count");

        if (countLocal) {
            setCount(Number(countLocal));
        }
    }, []); //_> dependency array -> hangi durumda çalışcağını belirttik.

    useEffect(() => {
        console.log("component did update for count");

        // count state'i her değiştiğinde yeni değeri localStorage üzerinde aktaralım:
        localStorage.setItem("count", count);
    }, [count]); //_> useEffect'i count'a bağladık.

    useEffect(() => {
        console.log("component did update for count and text");
    }, [count, text]); //_> useEffect'i count'a bağladık.

    return (
        <div style={{ margin: "100px" }}>
            <h1>
                Sayaç: <u>{count}</u>
            </h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>
                Girilen metin: <u>{text}</u>
            </p>

            <br />
            <br />
            <br />
            <Link to="/">
                <h3 style={{ position: "absolute", bottom: "20%", right: "47%" }}>
                    Go Home
                </h3>
            </Link>
        </div>
    );
};

StateHookFunc.defaultProps = {
    count: 5,
    text: `Merhaba!`,
};

export default StateHookFunc;
