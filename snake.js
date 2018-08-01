class Snake {
    constructor() {
      this.snakeLength = 1;
      this.position = {x:0, y:0};
      this.positionX = 0;
      this.positionY = 0;
    }

    growSnake() {
      this.snakeLength++;
      return this.snakeLength;   
    }

    turnSnake(param) {
      param.x  ? this.positionX++ : this.positionY++;
      console.log(this.positionX);
    }

    move(direction){
      //let defaltDirection = 1;
      if(direction.x)this.positionX++;
      if(direction.y)this.positionY++;
      console.log(this.position);
    }

    renderSnake(){
        if(this.positionX >= 10 || this.positionY >= 10){
            return alert('Game Over!');
        }

        let snakeBody = document.getElementById('x' + this.positionX + 'y' + this.positionY);
        snakeBody.style.backgroundColor = 'red';

        console.log(snakeBody);
    }

}