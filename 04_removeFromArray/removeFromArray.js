const removeFromArray = function() {
    if (arguments[0]) {
        let current_Argument = "";
        let second_Counter = 0;
        for (let i = 0; i < arguments.length - 1; i++){
            current_Argument = arguments[i + 1];
            second_Counter = arguments[0].length
            for(let j = 0; j < second_Counter; j++){
                if (arguments[0][j] === current_Argument){
                    arguments[0].splice(j, 1);
                }
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
