import { player } from './player.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;

    let x = 0 ;
    let y = 0 ;

    function update(){
        ctx.fillRect(x,y,50,50)
        requestAnimationFrame(update)
    }

    class Game {
        constructor(width, height){
        this.width = width;
            this.height = height;
            this.player = new player(this);
        }
        update(){

        }
        

        // hvordan endre verdien ?
draw(context){
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(1000, 1000);
    ctx.lineTo(0, 0);

    ctx.rect(400, 400, 200, 200);
    ctx.stroke();  
}
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});
