// gcc insertionSortList.c -o insertionSortList && ./insertionSortList
#include <stdio.h>
#include <stdlib.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *insertionSortList(struct ListNode *head)
{
    if (head == NULL)
    {
        return NULL;
    }

    struct ListNode *dummyHead = malloc(sizeof(struct ListNode));

    dummyHead->val = 0;
    dummyHead->next = head;

    struct ListNode *lastSorted = head;
    struct ListNode *curr = head->next;

    while (curr != NULL)
    {
        if (lastSorted->val <= curr->val)
        {
            lastSorted = lastSorted->next;
        }
        else
        {
            struct ListNode *prev = dummyHead;
            while (prev->next->val <= curr->val)
            {
                prev = prev->next;
            }
            lastSorted->next = curr->next;
            curr->next = prev->next;
            prev->next = curr;
        }
        curr = lastSorted->next;
    }

    struct ListNode *sortedHead = dummyHead->next;

    free(dummyHead);

    return sortedHead;
}
