class Snake {
    constructor() {
      this.snakeLength = 1;
      this.positionX = 0;
      this.positionY = 0;
      this.direction = 'x';
      this.needTurn = false;
    }

    growSnake() {
      this.snakeLength++;
      return this.snakeLength;   
    }

    turnSnake(param) {
      //param.x  ? this.positionX++ : this.positionY++;
        if(param.x){
            this.direction === 'x' ? this.direction = 'y' : this.direction = 'x';
            this.positionX++;
            this.needTurn = true;
        }
        if(param.y){
            this.direction === 'y' ? this.direction = 'x' : this.direction = 'y';
            this.positionY++;
            this.needTurn = true;
        }
      console.log(this.positionX);
    }

    move() {
      if(this.direction === 'x'){
          if(!this.needTurn){
              this.positionX++;
          }
      }
      if(this.direction === 'y'){
          if(!this.needTurn) {
              this.positionY++;
          }
      }
      this.needTurn = false;
      console.log(this.positionX, this.positionY);
      this.renderSnake();

    }

    renderSnake(){
        if(this.positionX >= 10 || this.positionY >= 10){
            //return alert('Game Over!');
            return false;
        }

        let snakeBody = document.getElementById('x' + this.positionX + 'y' + this.positionY);
        snakeBody.style.backgroundColor = 'red';

        console.log(snakeBody);
    }



}