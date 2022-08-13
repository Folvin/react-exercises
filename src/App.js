import {useUncontrolledForms} from "./useUncontrolledForms";

export function App() {
    const {formData, inputHandler} = useUncontrolledForms();

    return (
        <div>
            {(formData.username || formData.password) !== "" && (
                <h3>
                    {formData.username}
                    {(formData.username && formData.password) !== "" && " | "}
                    {formData.password}
                </h3>
            )}
            <input onChange={inputHandler} name="username" type="text" />
            <input onChange={inputHandler} name="password" type="password" />
        </div>
    );
}
