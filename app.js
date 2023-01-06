// [1,2,2,2,2,2,4]

function hasOddNumber(arr){
    return arr.some(function(val){
        return val % 2 !== 0;
    })
}

//hasAZero
// hasAZero(33321232131012)

function hasAZero(num){
    return num.toString().split('').some(function(val){
        return val === 0;
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

/*
WANT TO TRY MY OWN VERSION // 
function noDoubles(arr){
    return arr.filter(function(val,i){
        return arr.indexOf(val) === i;
    })
}
*/

//hasCertainKeys 
function hasCertainKeys(arr,key){
    return arr.every(function(val){
        return key in val;
    });
};