var div = document.getElementById('div1');
var timetoclick;
var begintime;
var endtime;
var contador = 0
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
    var p3 = document.getElementById('p3');
    var p4 = document.getElementById('p4');
    if(timetoclick > 0.02){
        p3.innerHTML = "Tempo de reação = " + timetoclick;
        contador = 0;
        sendEmail();
    }
    else
    {
        switch(contador){
            case 0:
                p3.innerHTML = "Deixa eu adivinhar... Apertou antes do tempo, tente novamente XD";
                contador++;
                break;
            case 1:
                p3.innerHTML = "De novo? Respira, errar é humano, tente novamente XD";
                contador++;
                break;
            case 2:
                p3.innerHTML = "Se atente ao retangulo, ele tem que estar verde, tente novamente XD";
                contador++;
                break;
            default:
                document.location.reload(true);
                break;
        }
    }
    if(contador < 3){  
        p4.innerHTML = "Clique no retangulo caso queira jogar novamente"
    }   
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