import {useState} from "react";
import {Login} from "./Login";

export function App() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        rememeber: false,
    });

    const onLogin = (data) => {
        setFormData(data)
    };

    return (
        <div>
            <Login onLogin={onLogin} />
        </div>
    );
}
