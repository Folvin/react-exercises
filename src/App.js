import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import {LanguageContext} from "./LanguageContext";

export class App extends React.Component {
    state = {
        language: "english"
    };

    languageChangeHandler = (e) => {
        this.setState({language: e.target.value});
    };

    render() {
        return (
            <div>
                <select name="Language" onChange={this.languageChangeHandler}>
                    <option value="english">{this.state.language === "italiano" ? "inglese" : "english"}</option>
                    <option value="italiano">{this.state.language === "italiano" ? "italiano" : "italian"}</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        );
    }
}
