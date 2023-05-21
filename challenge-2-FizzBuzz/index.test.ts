import {describe, expect, test} from '@jest/globals';
const fizzBuzz = require('./index')

describe('FizzBuzz', () => {
  test('Returning Fizz', () => {
    expect(fizzBuzz(3, 3)).toStrictEqual(["Fizz"]);
  });

  test('Returning Buzz', () => {
    expect(fizzBuzz(5, 5)).toStrictEqual(["Buzz"]);
  });

  test('Returning number', () => {
    expect(fizzBuzz(4, 4)).toStrictEqual(["4"]);
  });

  test('Returning multiple values', () => {
    expect(fizzBuzz(3, 4)).toStrictEqual(["Fizz", "4"]);
  });
})
