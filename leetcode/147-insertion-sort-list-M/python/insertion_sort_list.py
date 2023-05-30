"""
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
"""


class ListNode:
    def __init__(self, val=0, next=null):
        self.val = val
        self.next = next


def insertionSortList(head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    if head is None:
        return None

    # start of sorted list
    dummyHead = ListNode(0)
    dummyHead.next = head

    # last node of sorted portion
    lastSorted = head
    # node to be inserted in iteration
    curr = head.next

    while curr is not None:
        if lastSorted.val <= curr.val:
            lastSorted = lastSorted.next
        else:
            prev = dummyHead

            while prev.next.val <= curr.val:
                prev = prev.next

            lastSorted.next = curr.next
            curr.next = prev.next
            prev.next = curr

    return dummyHead.next
