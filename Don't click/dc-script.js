function showActionButton(id) {
    let text = document.getElementById(id).innerText;
    alert(text + ' button said : click click!');
    document.getElementById(id).style.backgroundColor = 'black';
    document.getElementById(id).style.color = 'white';
}

function showMainText() {
    document.getElementById('t1').innerHTML = 'Hi Piya!';
    document.getElementById('t2').innerHTML = 'Well done';
}