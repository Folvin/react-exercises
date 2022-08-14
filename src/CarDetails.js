import {useEffect, useRef, useState} from "react";

export function CarDetails({initialData}) {
    const [cars, setCars] = useState([]);

    function formHandler(e) {
        e.preventDefault();
        const inputCurrentData = {
            model: modelRef.current.value,
            year: yearRef.current.value,
            color: colorRef.current.value,
        };
        setCars((cars) => [...cars, inputCurrentData]);
        formReset()
    }

    function formReset() {
        modelRef.current.value = initialData.model;
        yearRef.current.value = initialData.year;
        colorRef.current.value = initialData.color;
    }

    useEffect(() => {
        formReset()
    }, [initialData]);

    const modelRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();

    return (
        <form onSubmit={formHandler}>
            <input
                ref={modelRef}
                name="model"
                type="text"
                defaultValue={initialData.model}
            />
            <input
                ref={yearRef}
                name="year"
                type="number"
                defaultValue={initialData.year}
            />
            <input
                ref={colorRef}
                name="color"
                type="text"
                defaultValue={initialData.color}
            />
            <button type="submit">salva</button>
        </form>
    );
}
