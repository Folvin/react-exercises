import React from "react";
import {CounterDisplay} from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.counterInitialValue ?? 0,
    };

    componentDidMount() {
        setInterval(() => {
            console.log(this.props.counterIncrement);
            this.setState((state) => ({
                count: state.count + (this.props.counterIncrement ?? 1),
            }));
        }, this.props.counterInterval ?? 1000);
    } 
    /* 
    per colpa della strict mode mi esegue componentDidMount 2 volte, c'è scritto che nella production build
    questo non accade quindi sto ignorando la cosa pero da abbastanza fastidio
    */


    render() {
        return <CounterDisplay count={this.state.count} />;
    }
}
