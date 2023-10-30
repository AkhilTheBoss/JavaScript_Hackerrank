"""
Detect a cycle in a linked list. Note that the head pointer may be 'None' if the list is empty.

A Node is defined as: 
 
    class Node(object):
        def __init__(self, data = None, next_node = None):
            self.data = data
            self.next = next_node
"""


def has_cycle(head):
    slow = head
    fast = head

    while fast != None and fast.next != None:
        slow = slow.next  # Move slow pointer one step
        fast = fast.next.next  # Move fast pointer two steps

        # If there is a cycle, slow and fast pointers will meet
        if slow == fast:
            return True  # Cycle detected

    return False  # No cycle found