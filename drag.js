score=0;
cross=true;
audio=new Audio('music.mp3');
audiogame=new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
},1000);
document.onkeydown=function (e) {
    console.log("Key code is:",e.keyCode)
    if (e.keyCode==38) {
        dino=document.querySelector('.dino')
        dino.classList.add('animinateDino')
        setTimeout(() => {
            dino.classList.remove('animinateDino')
        }, 700);
    }

if (e.keyCode==39) {
    dino=document.querySelector('.dino');
    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinox+112+"px";
}
if (e.keyCode==37) {
    dino=document.querySelector('.dino');
    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=(dinox-112)+"px";
}
}
setInterval(() => {
    dino=document.querySelector('.dino');
    obstacle=document.querySelector('.obstacle');
    gameover=document.querySelector('.gameOver');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    // console.log(offsetx,offsety);
    if (offsetx<73 && offsety<50) {
     gameover.innerHTML="Game-Over reload to play again";   
     obstacle.classList.remove('animinateObsticle')
     audiogame.play();
     setTimeout(() => {
        audiogame.pause();
        audio.pause();
     }, 1000);
    }
    else if(offsetx<140 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        },1000);
        setTimeout(() => {
            aniDuration=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animination-Duration'));
            newDuration=aniDuration-0.1;
            obstacle.style.animinationDuration=newDuration + 's'; 
        }, 500);
        
    }
    
}, 10);
function updateScore(score) {
    scoreGame.innerHTML="Your score:"+score;
}