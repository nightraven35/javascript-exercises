const sumAll = function(first_Integer, second_Integer) {
    let result = 0;
    if (first_Integer < second_Integer){
        for (let i = first_Integer; i <= second_Integer; i++){
            result += i;
       }
    }
    for (let i = second_Integer; i <= first_Integer; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
