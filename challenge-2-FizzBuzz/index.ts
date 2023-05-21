const fizzBuzz = (start: number, end: number): string[] => {
    let values: string[] = [];
    for(var i: number = start; i <= end; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            values.push("FizzBuzz");
        }
        else if(i % 3 === 0) {
            values.push("Fizz");
        }
        else if(i % 5 === 0) {
            values.push("Buzz");
        }
        else {
            values.push(String(i));
        }
    }

    return values;
}

console.log(fizzBuzz(12, 20).join(", "));

module.exports = fizzBuzz;
