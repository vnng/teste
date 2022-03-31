var div = document.getElementById('div1');
var timetoclick;
var begintime;
var endtime;
var alternate = true

function startGame(){
    var now = new Date().getTime();
    while(new Date().getTime() < now + 1000 + (Math.floor(Math.random()*4000))){}
    goingGame();
}

function stopGame(){
    endtime = new Date().getTime();
    div.style.background ="red";
    timetoclick = (endtime - begintime)/1000;
    var p2 = document.getElementById('p2');
    p2.innerHTML = "Tempo de reação = " + timetoclick;
}

function goingGame(){
    begintime = new Date().getTime();
    div.style.background = "green";
}

function alternateCall(){
    if(alternate){
        alternate = false;
        startGame();
    }
    else{
        alternate = true
        stopGame();
    }

}