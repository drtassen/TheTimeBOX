export class player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = 200;
    }
    update (){

    }
    draw(context){
        context.fillStyle = 'red';
        context.fillRect(this.x, ths.y, this.width, this.height);
    }
}