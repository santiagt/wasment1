import "./styles.css";
let boardArr = [];
for (let x=0; x<5; x++) {
  boardArr.push(["","","","",""]);
}

document.addEventListener('click', (event) => {
  console.log(event.target.type);
  if (event.target instanceof HTMLTableCellElement) {
    event.preventDefault();
    let pos = event.target.id;
    console.log(pos);
    
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
