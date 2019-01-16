import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FirstRoutePage from "./components/FirstRoutePage";
import Home from "./components/Home";

const Error = function () {
    return (
        <h1>
            Error: PATH doesn't exist!!!
        </h1>
    )
};

export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {color: "yellow"};
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <AppContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/first" component={FirstRoutePage}/>
                        <Route component={Error}/>
                    </Switch>
                </BrowserRouter>
            </AppContextProvider>
        );
    }
};

ReactDOM.render(<Index/>, document.getElementById("index"));

