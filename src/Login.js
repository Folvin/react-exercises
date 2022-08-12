import {useState} from "react";

export function Login({onLogin}) {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    });

    function inputHandler(e) {
        const {name, type, value, checked} = e.target;

        setData((data) => {
            return {...data, [name]: type === "checkbox" ? checked : value};
        });
    }

    function buttonHandler(e) {
        onLogin(data)
    }

    return (
        <div>
            <input onChange={inputHandler} name="username" type="text" />
            <input onChange={inputHandler} name="password" type="password" />
            <input onChange={inputHandler} name="remember" type="checkbox" />
            <button onClick={buttonHandler} type="button" disabled={!(data.username && data.password)}>login</button>
        </div>
    );
}
