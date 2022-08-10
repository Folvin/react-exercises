import React, {Component} from "react";
import {LanguageContext} from "./LanguageContext";

class DisplayLanguage extends Component {
    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    {(language) => {
                        return <h1>{language}</h1>
                    }}
                </LanguageContext.Consumer>
            </div>
        );
    }
}

export default DisplayLanguage;
