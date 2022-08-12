export function Sum({number}) {
    const numberSum = number.reduce(
        (accumulator, currentNumber) => accumulator + currentNumber,
        0
    );

    return <h1>{numberSum}</h1>;
}
