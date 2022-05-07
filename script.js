var div = document.getElementById('div1');
var timetoclick;
var begintime;
var endtime;
var alternate = true

function startGame(){
    var now = new Date().getTime();
    var time = now + (Math.floor(Math.random()*4000) + 1)
    while(new Date().getTime() < time){}
    goingGame();
}

function stopGame(){
    endtime = new Date().getTime();
    timetoclick = (endtime - begintime)/1000;
    div.style.background ="red";
    var p2 = document.getElementById('p2');
    if(timetoclick > 0.02){
        p2.innerHTML = "Tempo de reação = " + timetoclick;
        sendEmail();
    }
    else
        p2.innerHTML = "Deixa eu adivinhar... Apertou antes do tempo, tente novamente XD";
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

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "enviandoemailpi3@gmail.com",
	Password : "projetointegrador3",
	To : 'enviandoemailpi3@gmail.com',
	From : "enviandoemailpi3@gmail.com",
	Subject : timetoclick,
	Body : "resultado",
	});
}