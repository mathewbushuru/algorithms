class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  const dummyHead: ListNode = new ListNode(0);

  dummyHead.next = head;

  let lastSorted: ListNode = head;
  let curr: ListNode | null = head.next;

  while (curr !== null) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next!;
    } else {
      let prev: ListNode = dummyHead;
      while (prev.next !== null && prev.next.val <= curr.val) {
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
