import {useState} from "react";

export function useUncontrolledForms() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    function inputHandler(e) {
        const {name, value} = e.target;
        setFormData((formData) => {
            return {...formData, [name]: value};
        });
    }

    return {
        formData: formData,
        inputHandler: inputHandler,
    };
}
