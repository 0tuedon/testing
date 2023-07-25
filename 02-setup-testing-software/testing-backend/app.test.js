import { add } from './math';


it('Should return the sum of 2 numbers', ()=>{
    const num1 = 1
    const num2 = 2;
    const result = add(num1, num2);
    expect(result).toBe(num1-num2)
})


it('Should return the sum of 2 numbers', ()=>{
    const num1 = 1
    const num2 = 2;
    const result = add(num1, num2);
    expect(result).toBe(num1+num2)
})