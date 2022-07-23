//1678. Goal Parser Interpretation
//https://leetcode.com/problems/goal-parser-interpretation/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const ans = [];
    for (let i = 0; i < command.length; i++) {
        switch (command[i]) {
            case "G": 
                ans.push(command[i]);
                break;
            case "(": 
                if (command[i+1] == ")") {
                    ans.push("o");
                    i++;
                }
                if (command[i+1] == "a") {
                    ans.push("al");
                    i+=3;
                }
                break;
        }
    }
    return ans.join("")
};
