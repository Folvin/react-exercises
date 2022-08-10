import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import {LanguageContext} from "./LanguageContext";

export class App extends React.Component {
    state = {
        language: undefined,
    };

    languageChangeHandler = (e) => {
        this.setState({language: e.target.value});
    };

    render() {
        return (
            <div>
                <select name="Language" onChange={this.languageChangeHandler}>
                    <option value="it">italiano</option>
                    <option value="en">inglese </option>
                </select>
                <LanguageContext.Provider value={this.state.value}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        );
    }
}
