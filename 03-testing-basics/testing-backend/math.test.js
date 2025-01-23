import add from "./math";
import {it, expect} from "vitest"


it('Should return the sum of 2 numbers', ()=>{
    const numArray = [1,2,3,5]
    const expectedResults = numArray.reduce((prevValue,currValue)=>{
        return prevValue + currValue
    }, 0)
    const result = add(numArray);
    expect(result).toBe(expectedResults)
})

it('Should Yield NAN if a if at least one value is Invalid', ()=>{
    const numArray = [1,2,3,5, 'invalid']

    const result = add(numArray);
    expect(result).toBeNaN();
})

it('Should return correct sum for string values', ()=>{
    const numArray = ['1','1','3']
    const resultToExpect = numArray.reduce((prevValue,currValue)=>{
        return +prevValue + +currValue
    }, 0)

    let result = add(numArray);

    expect(result).toBe(resultToExpect)
})

it("should return 0 if array is empty", ()=>{
    let numArray = [];
    let result = add(numArray)

    expect(result).toBe(0);
})


it("should throw an error if no argument is passed", ()=>{
    let resultFn = ()=>{ add()};

    expect(resultFn).not.toThrow()
})

it("should throw an error if multiple argument is passed",()=>{
    let argA = [1,2,3,4,]
    let argB = [4,2,3,1];
    let expectedResult = "Too Many Arguments"
    let resultFn = ()=> { add(argA, argB)};
    expect(resultFn).toThrow(expectedResult)
})