import { player } from './player.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;


    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new player(this);
        }
        update(){

        }
        
draw(context){
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(130, 130);

    ctx.rect(400, 400, 70, 200);
    ctx.stroke();
}
    




        //draw(context){
        //    this.player.draw(context);
        //    
        //}
    }//

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});

