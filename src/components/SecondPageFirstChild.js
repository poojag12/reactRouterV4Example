import React from "react";
import {AppContext} from "../index";


export default class SecondPageFirstChild extends React.Component {
    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>",AppContext);
        return (
            <AppContext.Consumer>
                {(context) => <div style={{"backgroundColor": context.color}}>
                    Creates a Context object. When React renders a component that subscribes to this Context object it will
                    read the current context value from the closest matching Provider above it in the tree.
                </div>
                }
            </AppContext.Consumer>
        );
    }

}