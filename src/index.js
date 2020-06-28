import "./styles.css";
let boardArr = [];
for (let x=0; x<5; x++) {
  boardArr.push(["","","","",""]);
}

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
  
  if (row > 0 && boardArr[row][col] === "") {
    boardArr[row][col] = mark;
  }

}

document.addEventListener('click', (event) => {
  console.log(event.target.type);
  if (event.target instanceof HTMLTableCellElement) {
    event.preventDefault();
    let pos = event.target.id;
    console.log(pos);
    playTurn(pos, "X");
  }
});

const printBoard = () => {
  let board = "<table border=1>";
  let x = 0;
  for (let i=0; i<boardArr.length; i++) {
    board += "<tr>";
    for (let j=0; j<boardArr[i].length; j++) {
      let id = x; 
      board += `<td id=${id} width=50px height=50px> <p style='text-align:center; font-size:25px;' > ` 
                + boardArr[i][j] + "</p> </td>";
      x++;
    }
    board +="</tr>";
  }
  board += "</table>";
  console.log(board);
  return board;
};


document.getElementById("board").innerHTML = printBoard();
