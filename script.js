var div = document.getElementById('div1');
var timetoclick;
var begintime;
var endtime;

function startGame(){
    div.style.background = 'red';
    var now = new Date().getTime();
    while(new Date().getTime() < now + 2000 + (Math.floor(Math.random()*3000))){}
    goingGame();
}

function stopGame(){
    endtime = new Date().getTime();
    div.style.background ="yellow";
    timetoclick = (endtime - begintime)/1000;
    var p2 = document.getElementById('p2');
    p2.innerHTML = "Tempo de reação = " + timetoclick;
}

function goingGame(){
    begintime = new Date().getTime();
    div.style.background = "green";
}