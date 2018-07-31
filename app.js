'use strict';

let boardEl = document.getElementById("board");

for (let i = 0; i < 10; i++) {
  var boardRowEl = document.createElement("tr");
  var y = i;

  for (let i=0; i < 10; i++){
    let boardBoxEl = document.createElement("td");
    boardBoxEl.id = 'x'+ i + 'y' + y;
    boardBoxEl.innerHTML = 'x'+ i + 'y' + y;
    boardRowEl.appendChild(boardBoxEl); 
  }
  boardEl.appendChild(boardRowEl);
}

let snake = new Snake;

var i = 0;
function move() {
  i++
  snake.positionX++;
    setTimeout(function() {
        if(i < 10) {
          console.log(snake.positionX);
          move();
        }
    }, 1000);
}
move();