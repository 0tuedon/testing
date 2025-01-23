import {it, expect} from "vitest";
import { transformToNumber } from "./transform";


it("Should turn a string to number", ()=>{
    const testString =  '10';
    const numExpected  = +testString;

    const result = transformToNumber(testString)

    expect(result).toBe(numExpected)
})

it("Should return a the number for a type number", ()=>{
    const testString =  10;

    const result = transformToNumber(testString)

    expect(result).toBeTypeOf("number")
})

it("Should return NAN for any other string", ()=>{
    const testString = "nrr";
    
    const result =  transformToNumber(testString)

    expect(result).toBeNaN()
})

it("Should return an error for any other type", ()=>{
    const testArray = [];
    
    const resultFn = ()=> { transformToNumber(testArray)}

    expect(resultFn).toThrow(/Wrong data type/)
})