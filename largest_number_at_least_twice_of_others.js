const nums = [1,0];
let l = nums.length;
let max = 0;
let maxN = nums[0];
let isMax = false;
for(let i = 0 ; i < l ; i ++)
{
    let n = nums[i];
    let k = 1;
    for(let j = 0 ; j < l ; j++)
    {
        if(n >= nums[j]*2)
        {
            k++;
        }
    }

    if(k == l && n >= maxN)
    {
        max = i;
        maxN = n;
        isMax = true;
    }
    else if(!isMax)
    {
        max = -1;
    }
}
console.log("Massimo: " + max);