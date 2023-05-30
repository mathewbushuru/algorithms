/*
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
*/

// provided in problem
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const insertionSortList = function (head) {
  // special case
  if (head === null) {
    return null;
  }

  // start of sorted list
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  // last node in sorted portion of list
  let lastSorted = head;

  // node to be inserted in iteration
  let curr = head.next;

  while (curr !== null) {
    if (lastSorted.val <= curr.val) {
      // curr in correct position already so just move pointer
      lastSorted = lastSorted.next;
    } else {
      // find correct position to insert curr
      let prev = dummyHead.next;

      while (prev.next.val <= curr.val) {
        prev = prev.next;
      }

      // insert curr just where prev stopped
      lastSorted.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
    }

    curr = lastSorted.next;
  }

  return dummyHead.next;
};
