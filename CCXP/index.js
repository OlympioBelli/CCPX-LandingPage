const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")

const lancamento = "06 jan 2023"

function zero(valor,s){
    if (valor<10){
        return "0"+valor+s
    }else{
        return valor+s
    }
}


function countDown(){
    const dataLance = new Date(lancamento)
    const dataHoje = new Date()
    const segTotal = (dataLance - dataHoje)/1000;
    const dias = Math.floor(segTotal/(60*60*24));
    const horas = Math.floor(segTotal/(60*60))%24;
    const minutos = Math.floor(segTotal/(60))%60;
    const segundos = Math.floor(segTotal)%60;

    dia.innerHTML = zero(dias , "D")
    hora.innerHTML = zero(horas, "H")
    minuto.innerHTML = zero(minutos, "M")
    segundo.innerHTML = zero(segundos, "S")

}

countDown();
setInterval(countDown, 1000)