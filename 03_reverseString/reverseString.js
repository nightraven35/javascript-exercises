const reverseString = function(string) {
    let reversedString = "";
    if(string){
        let list = string.split("");
        for (let i = 0; i < string.length; i++){
            reversedString += list.pop();
        }
        return reversedString;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
