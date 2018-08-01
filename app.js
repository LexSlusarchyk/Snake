'use strict';

let boardEl = document.getElementById('board');

for (let i = 0; i < 10; i++) {
  var boardRowEl = document.createElement('tr');
  var y = i;

  for (let i=0; i < 10; i++){
    let boardBoxEl = document.createElement('td');
    boardBoxEl.id = 'x'+ i + 'y' + y;
    boardBoxEl.innerHTML = 'x'+ i + 'y' + y;
    boardRowEl.appendChild(boardBoxEl); 
  }
  boardEl.appendChild(boardRowEl);
}

let snake = new Snake;

let moveCounter = 0;
function move() {
  moveCounter++;
  snake.move();
    setTimeout(function() {
      if(moveCounter < 21) {

        move();
      }
    }, 1000);
}

move();

