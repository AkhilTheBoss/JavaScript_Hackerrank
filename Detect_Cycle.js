function processData(input) {
  let slow = input;
  let fast = input;

  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer one step
    fast = fast.next.next; // Move fast pointer two steps

    // If there is a cycle, slow and fast pointers will meet
    if (slow === fast) {
      return true; // Cycle detected
    }
  }
  return false; // No cycle found
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
