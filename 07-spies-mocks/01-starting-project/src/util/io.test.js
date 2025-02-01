import { expect, it, vi } from "vitest";
import path, { join } from "path";
import writeData from "./io";

vi.mock('fs');
vi.mock('path', ()=>{

    return{
        default:{
            join:(...args)=>{
               return args[args.length-1]
            }
        }
    }
});

it("Should Write Data", ()=>{
    const testData = "Test"
    const testFile = "test.txt";

    writeData(testData, testFile);

    expect(writeData(testData, testFile)).resolves.toBeUndefined()
})