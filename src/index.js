import "./styles.css";
lat boardArr = ["","","O","","","","","",""];

const printBoard = () => {
  let board = "";
  let colc = 0;
  for (i=0; i<boardArr.length; i++) {
    if (colc === 0) board += "<tr>";
    board += "<td>" + boardArr[i] + "</td>";
    if (colc === 2)  {
      board += "</tr>";
      colc = 0;
  } else {
    colc++;
  }
  }
};
printBoard();
document.getElementById("board").innerHTML = board;
