//21. Merge Two Sorted Lists
//https://leetcode.com/problems/merge-two-sorted-lists/



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListToArray(list) {
    let arr = []
    let currentNode = list
    while (currentNode !=null) {
        arr.push(currentNode.val)
        currentNode = currentNode.next                 
    }
    return arr;
}

function ToSinglyLinkedList(arr){
    let prevNode = null
    let head
    if (arr.length) {
        arr.forEach((el, index) => {  
            let prev = prevNode
            let node = {
                val: undefined, 
                next: undefined, 
                ListNode
            }
            node.ListNode(el)
            if (prevNode)         
                prevNode.ListNode(prevNode.val, node)
            prevNode = node
            if (index == 0) head = prevNode
        });
    }
    else {
        head = {
            ListNode
        }
        head.ListNode()  
    }
    return head;
    
}
var mergeTwoLists = function(list1, list2) {
    const arr1 = ListToArray(list1)
    const arr2 = ListToArray(list2)
    if (arr1.length || arr2.length)
    return ToSinglyLinkedList(arr1.concat(arr2).sort((a, b) => {return a - b}))
    else return list1
};
