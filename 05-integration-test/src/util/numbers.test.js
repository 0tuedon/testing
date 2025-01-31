import { it, expect, describe } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';


describe("transformToNumber()", ()=>{
  it('should transform a string number to a number of type number', () => {
    const input = '1';
  
    const result = transformToNumber(input);
  
    expect(result).toBeTypeOf('number');
  });
  
  it('should transform a string number to a number of type number', () => {
    const input = '1';
  
    const result = transformToNumber(input);
  
    expect(result).toBe(+input);
  });
  
  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};
  
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
  
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
})

// Clean Numbers TEST

describe("cleanNumbers()", ()=>{
  it("Should return an array of type number value if an array of string number is provided", ()=>{
    const numberValues = ["1", "2", "3"]

   const cleanedNum = cleanNumbers(numberValues)

   expect(cleanedNum[0]).toBeTypeOf("number")
  });
  it("Should return an error if an invalida value is passed", ()=>{
    const numberValues = ["1", "", "3"]

   const cleanedNum = ()=> { cleanNumbers(numberValues)}

   expect(cleanedNum).toThrow()
  })
})

