import "./styles.css";
let boardArr = ["","","O","","","","","",""];

let board = "<table border=1>";
let colc = 0;
for (let i=0; i<boardArr.length; i++) {
  if (colc === 0) board += "<tr>";
  board += "<td width=75px height=75px> <p style='text-align:center; font-size:30px;' > " + boardArr[i] + "</p> </td>";
  if (colc === 2)  {
    board += "</tr>";
    colc = 0;
} else {
  colc++;
}
}
board += "</table>";

document.getElementById("board").innerHTML = board;
