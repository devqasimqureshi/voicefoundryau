const fizzBuzz = (start, end) => {
    let values = [];
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            values.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            values.push("Fizz");
        }
        else if (i % 5 === 0) {
            values.push("Buzz");
        }
        else {
            values.push(String(i));
        }
    }
    return values;
};
console.log(fizzBuzz(12, 20).join(", "));
//# sourceMappingURL=index.js.map