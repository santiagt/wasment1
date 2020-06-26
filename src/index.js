import "./styles.css";
let boardArr = [];
for (let x=0; x<5; x++) {
  boardArr.push(["","","","",""]);
}

let board = "<table border=1>";
let id = "";
for (let i=0; i<boardArr.length; i++) {
  board += "<tr>";
  for (let j=0; j<bardArr[i].length; j++) {
    id = i + j; 
    board += "<td width=50px height=50px> <p id=('id') style='text-align:center; font-size:25px;' > " + boardArr[i] + "</p> </td>";
    console.log(board);
  }
  board +="</tr>";
}
board += "</table>";

document.getElementById("board").innerHTML = board;
