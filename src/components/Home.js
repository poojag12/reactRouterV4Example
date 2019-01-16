import React from "react"
import ReactDOM from "react-dom";
import {withRouter} from "react-router-dom";
import "./Home.css"
import SecondPage from "./SecondPage";
import {AppContext} from "../index"





export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onClick = this._onClick.bind(this);
    }

    render() {
        return (<div>
            <div className="home-header">
                <h1>Home</h1>
            </div>
            <div className="home body">
                <button onClick={this._onClick}>Go To First Page</button>
            </div>

            <SecondPage />
        </div>)
    }

    _onClick(event) {
        this.props.history.push('/first');
    }
}
