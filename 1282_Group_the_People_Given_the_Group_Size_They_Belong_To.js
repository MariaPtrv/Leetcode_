//1282. Group the People Given the Group Size They Belong To
//https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const ans = [];  
    const groupSizesObj = groupSizes.map((elem, index) => {return {"id": index, "groupSize": elem}});
    
    while (groupSizesObj.length > 0) {
        let newGroup = [];
        let currentGroupSize = groupSizesObj[0].groupSize;
        while (newGroup.length < currentGroupSize) {
            const arrayItemIndex = groupSizesObj.findIndex(item => item["groupSize"] == currentGroupSize);
            const uniqueId = groupSizesObj[arrayItemIndex].id;
            newGroup.push(uniqueId)      
            delete groupSizesObj.splice(arrayItemIndex,1);
        }
        ans.push(newGroup);
    }
    return ans;
};
