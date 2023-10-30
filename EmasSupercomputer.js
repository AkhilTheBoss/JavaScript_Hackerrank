"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'twoPluses' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function twoPluses(grid) {
  // Get the number of rows and columns in the grid
  const row = grid.length;
  const col = grid[0].length;
  // Create a temporary grid with '0' padding
  let temp = [];
  temp.push(Array(col + 2).fill("0")); // Add a row of '0's at the top
  // Create a new row with '0' padding on both sides
  for (let i = 0; i < row; i++) {
    const newRow = ["0", ...grid[i], "0"];
    temp.push(newRow);
  }
  temp.push(Array(col + 2).fill("0")); // Add a row of '0's at the bottom

  let answer = 0;
  // Iterate through each cell in the temporary grid
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      let r = 0;
      // Check for valid pluses centered at the current cell
      while (
        temp[i + r][j] === "G" &&
        temp[i - r][j] === "G" &&
        temp[i][j - r] === "G" &&
        temp[i][j + r] === "G"
      ) {
        // Mark the cells as 'g' to avoid overlap
        temp[i + r][j] = temp[i - r][j] = temp[i][j - r] = temp[i][j + r] = "g";
        // Find all the possible plus signs and calculate the max area
        for (let I = 1; I <= row; I++) {
          for (let J = 1; J <= col; J++) {
            let R = 0;
            while (
              temp[I + R][J] === "G" &&
              temp[I - R][J] === "G" &&
              temp[I][J - R] === "G" &&
              temp[I][J + R] === "G"
            ) {
              answer = Math.max(answer, (4 * r + 1) * (4 * R + 1));
              R += 1;
            }
          }
        }
        r += 1;
      }

      // Revert back the occupied cells
      r = 0;
      while (
        temp[i + r][j] === "g" &&
        temp[i - r][j] === "g" &&
        temp[i][j - r] === "g" &&
        temp[i][j + r] === "g"
      ) {
        temp[i + r][j] = temp[i - r][j] = temp[i][j - r] = temp[i][j + r] = "G";
        r += 1;
      }
    }
  }
  return answer;

  // Write your code here
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  let grid = [];

  for (let i = 0; i < n; i++) {
    const gridItem = readLine();
    grid.push(gridItem);
  }

  const result = twoPluses(grid);

  ws.write(result + "\n");

  ws.end();
}
