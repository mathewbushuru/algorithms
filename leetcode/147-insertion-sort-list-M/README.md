**Leetcode 147 (Medium) - [Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)**

> Given the `head` of a singly-linked linked list, sort the list using insertion sort, and return the sorted list's head.

> The steps of the insertion sort algorithm:
> Insertion sort iterates, consuming one element each repetition and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs in the input data and inserts it there.
> It repeats until no input elements remain.

> Input: `head = [4,2,1,3]`
> Output: `[1,2,3,4]`

> Input: `head = [-1,5,3,4,0]`
> Output: `[-1,0,3,4,5]`

Solution

![147](../imgs/147.jpeg)

`JavaScript`

```js
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
      let prev = dummyHead;

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
```

`Java`

```java
class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}

public class Solution {
    public ListNode insertionSortList(ListNode head) {
        if (head == null) {
            return null;
        }

        ListNode dummyHead = new ListNode(0);

        dummyHead.next = head;

        ListNode lastSorted = head;
        ListNode curr = head.next;

        while (curr != null) {
            if (lastSorted.val <= curr.val) {
                lastSorted = lastSorted.next;
            } else {
                ListNode prev = dummyHead;
                while (prev.next.val <= curr.val) {
                    prev = prev.next;
                }
                lastSorted.next = curr.next;
                curr.next = prev.next;
                prev.next = curr;
            }

            curr = lastSorted.next;
        }

        return dummyHead.next;
    }
}

```

Other solutions: [`Python`](https://github.com/mathewbushuru/algorithms/blob/main/leetcode/147-insertion-sort-list-M/python/insertion_sort_list.py), [`C`](https://github.com/mathewbushuru/algorithms/blob/main/leetcode/147-insertion-sort-list-M/c/insertionSortList.c), [`TypeScript`](https://github.com/mathewbushuru/algorithms/blob/main/leetcode/147-insertion-sort-list-M/typescript/insertionSortList.ts)

Time complexity: `O(n^2)`

Space complexity: `O(1)`