function transformToNumber(value) {
    if(typeof value !== "number" && typeof value !== "string") throw Error("Wrong data type")
    return +value;
  }
  
  exports.transformToNumber = transformToNumber;
  