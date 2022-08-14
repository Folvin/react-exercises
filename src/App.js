import { useState } from "react";
import {DisplayLanguage} from "./DisplayLanguage";
import {LanguageContext} from "./LanguageContext";

export function App() {

    const [language, setLanguage] = useState("english")

    function languageChangeHandler(e) {
        setLanguage(language => e.target.value)
    }

    return (
        <div>
            <select name="language" onChange={languageChangeHandler}>
                <option value="english">{language === "italiano" ? "inglese" : "english"}</option>
                <option value="italiano">{language === "italiano" ? "italiano" : "italian"}</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
    );
}
