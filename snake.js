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
      this.position.x++;
      console.log(this.position);
    }

}