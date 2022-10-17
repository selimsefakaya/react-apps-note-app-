import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StateHookClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            text: "",
        };
    }

    componentDidMount() {
        //component oluşturulduğunda çalışan bir metot
        console.log("component did mount");
    }

    componentDidUpdate() {
        //state içindeki bir değişken değiştirildiğinde çalışan metot
        console.log("component did update");
    }

    render() {
        return (
            <div style={{ margin: "100px" }}>
                <h1>
                    Butona <u>{this.state.count}</u> kez tıkladınız.
                </h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Buton
                </button>
                <Link to="/">
                    <h3 style={{ position: "absolute", bottom: "20%", right: "47%" }}>
                        Go Home
                    </h3>
                </Link>
            </div>
        );
    }
}
