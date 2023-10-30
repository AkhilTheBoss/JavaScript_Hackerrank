# JavaScript_Hackerrank


# Linked Lists: Detect a Cycle
This code is designed to determine whether the given linked list contains a cycle. A cycle in the linked list is identified when any node in the list is visited more than one while traversing the list. I used two pointers, slow and fast, to detect such cycles efficiently. 

Two pointers, slow and fast, both initially point to the head of the linked list. The slow pointer advances one step at a time and the fast pointer advances two steps at a time. If there is a cycle in the linked list, the slow and fast pointers will meet at some point. This is because the fast pointer, which moves twice as fast as the slow pointer, will eventually catch up with the slow pointer within the cycle. 

If the slow and fast pointers meet, a cycle is detected else there is no cycle in the linked list. 


# Ema's Supercomputer
This code is designed to find the two largest plus signs within a given grid. A plus sign is defined as a crossing of two segments(horizontal and vertical) of equal lengths. The code identfies these plus signs and calculates the largest their respective areas to determine the maximum product of those areas. 

A temporary grid is created with additional rows and columns filled with 0's to ensure the boundaries of the grid can be checked without going out of bounds. At each cell, the code checks for the presence of a valid plus sign. If a valid plus sign is found, the code marks the cells occupied by the plus sign as 'g' to avoid overlap. It then calculates the areas of all possible plus signs and we can find the two largest plus signs in the grid. After calculating the areas, the code reverts 'g' back to 'G' to restore the original grid state. 
