function  add(nums, ...rest){
    let sum = 0;
    if(!nums) return 0;
    if(rest.length > 0) throw Error("Too Many Arguments")
    for(let num of nums){
        sum += +num
    }

    return sum
}

module.exports = add