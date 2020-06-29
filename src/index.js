import "./styles.css";
let boardArr = [];
for (let x=0; x<5; x++) {
  boardArr.push(["","","","",""]);
}
let winner = null;

const playTurn = (cell, mark) => {
  let row = -1;
  let col = -1;

  if (cell < 5) {
    row = 0;
    col = cell;
  } else if ( cell < 10 && cell > 4) {
    row = 1;
    col = (cell - 5);
  } else if ( cell < 15 && cell > 9) {
    row = 2;
    col = (cell - 10);
  } else if ( cell < 20 && cell > 14) {
    row = 3;
    col = (cell - 15);
  } else if (cell > 19) {
    row = 4;
    col = (cell - 20);
  }
  console.log(row);

  if (row > -1  && boardArr[row][col] === "") {
    boardArr[row][col] = mark;
  }
  console.log(mark);
  console.log(boardArr);

}

document.addEventListener('click', (event) => {
  console.log(event.target.type);
  if (event.target instanceof HTMLTableCellElement) {
    event.preventDefault();
    let pos = event.target.id;
    console.log(pos);
    playTurn(pos, "X");
    printBoard();
    checkWin();
  }
});

const allEqual = arr => arr.every(v => v === arr[0] && v !== "");

const checkWin = () => {
  let horarr = [[],[],[],[],[]];
  let diagon1 = [];
  let diagon2 = [];
  let boardPlain = [];
  for (let i=0; i<5; i++) {
    diagon1.push(boardArr[i][i]);
    for (let j=0; j<5; j++) {
      horarr[i].push(boardArr[j][i]);
      boardPlain.push(boardArr[i][j]);
    }
  }
  for (let i=4; i>-1; i--) {
    diagon2.push(boardArr[i][i]);
  }

  let combo = horarr.concat(boardArr).concat(diagon2).concat(diagon1);

  combo.forEach((line) => {
    if (allEqual(line)) {
      if (line[0] === "X") {
        alert("The winner is player 1!");
      } else {
        alert("The winner is player 2!");
      }
    }
  });
  (boardPlain.includes("") ? null : alert("It's a tie!"));
}

const printBoard = () => {
  let board = "<table border=1>";
  let x = 0;
  for (let i=0; i<boardArr.length; i++) {
    board += "<tr>";
    for (let j=0; j<boardArr[i].length; j++) {
      let id = x; 
      board += `<td id=${id} width=70px height=70px> 
                <p style='text-align:center; font-size:22px;'>` 
                + boardArr[i][j] + "</p> </td>";
      x++;
    }
    board +="</tr>";
  }
  board += "</table>";
  document.getElementById("board").innerHTML = board;
}


printBoard();
