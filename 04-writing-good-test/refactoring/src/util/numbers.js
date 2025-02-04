import { validateNumber, validateStringNotEmpty } from "./validation";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numberValues){
  let numbers = []
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers
}