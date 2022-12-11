document.addEventListener('musemove', function(e){
vartracker = document.getElementById('tracker');

    // getting mouse data
    var posX = e.clientX;
    var posY = e.clientY;

    tracker,style.top = (posY * 100) / window.innerHeight + '%';
    tracker,style.left = (posX * 100) / window.innerWidth + '%';

});

/*jquery*/
//same thing with jquery

//$(document).on ('mousemove', function(e){
//
//// getting Data
//    var posX = e.clientX;
//    var posY = e.clientY;
//
//   //getting Mouse data
//    $('#tracker').css({
//        'top':   (posY * 100) / window.innerHeight + '%',
//        'left':  (posX * 100) / window.innerWidth + '%',
//
//    })
//
//})
