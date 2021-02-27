let modeDay = true;

function changeMode() {
    if(modeDay) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.getElementById('t1').innerHTML = 'NIGHT';
        document.getElementById('t2').innerHTML = 'night';
        document.getElementById('t3').style.color = 'blue';
        document.getElementById('t4').innerHTML = 'day';
        document.getElementById('t5').innerHTML = 'day';
        document.getElementById('button').style.color = 'white';
        modeDay = false;
    }else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('t1').innerHTML = 'MORNING';
        document.getElementById('t2').innerHTML = 'day';
        document.getElementById('t3').style.color = 'red';
        document.getElementById('t4').innerHTML = 'night';
        document.getElementById('t5').innerHTML = 'night';
        document.getElementById('button').style.color = 'black';
        modeDay = true;
    }
}