import { it, expect, describe } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

import { it, expect } from "vitest";
import { generateToken } from "./async-example";

describe("generateToken()",()=>{
  it("Should fail intentionally (async/await)", async () => {
    const testUserEmail = "tuedon@gmail.com";
  
    const token = await new Promise((resolve, reject) => {
      generateToken(testUserEmail, (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve(token);
        }
      });
    });
    expect(token).toBeDefined() 
  });
})

describe("generateTokenPromise()",()=>{
  it("Should fail intentionally (async/await)", async () => {
    const testUserEmail = "tuedon@gmail.com";
  
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined() 
  });
})
