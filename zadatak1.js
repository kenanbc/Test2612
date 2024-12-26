function sum(nums, target) { 
    console.log(nums.reduce((acc, e, i) => {
        if(e + nums.find((f) => f != e && f + e == target))
            acc.push(i)
        return acc;
    }, []));
}

const arr = [2, 7, 5, 11, 15];
const target = 9;
sum(arr, target);