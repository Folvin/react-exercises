import {useEffect, useState} from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => {
                return count + 1;
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1>counting: {count}</h1>
        </div>
    );
}
