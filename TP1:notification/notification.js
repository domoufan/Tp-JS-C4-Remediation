
const buttons = document.getElementsByTagName('button');
const div     = document.getElementsByTagName('  div ');

buttons[0].setAttribute('class','span_vert');
buttons[1].setAttribute('class','span_rouge');
buttons[2].setAttribute('class','span_jaune');
buttons[3].setAttribute('class','span_bleu');

function Charger_notif(color,message){
    const aside = document.getElementsByTagName('aside');
    var div = document.createElement('div');
    div.setAttribute('id','notif');
    div.style.backgroundColor = `${color}`;
    div.insertAdjacentHTML("afterbegin","<h4>Notification</h4>");
    div.insertAdjacentText("beforeend",`${message}`);
    aside[0].insertAdjacentElement("beforeend",div);
   
    setTimeout(()=>{div.remove();},1000);
}

buttons[0].addEventListener('click',()=>{Charger_notif('rgb(17, 218, 17)','success');})
buttons[1].addEventListener('click',()=>{Charger_notif('red','danger')})
buttons[2].addEventListener('click',()=>{Charger_notif('orange','advertisement')})
buttons[3].addEventListener('click',()=>{Charger_notif('rgb(74, 154, 246)','information')})