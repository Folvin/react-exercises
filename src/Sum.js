export function Sum({number = [5, 5, 5]}) {
    const numberSum = number.reduce(
        (accumulator, currentNumber) => accumulator + currentNumber,
        0
    );

    return <h1>{numberSum}</h1>;
}
