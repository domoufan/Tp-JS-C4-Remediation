/////////////// VARIABLES //////////////////////////////////////////////
const add_note = createElementWithClass('button', 'add_note');
const add_col = createElementWithClass('button', 'add_col');
const main = createElementWithClass('div', 'main');
const section = document.querySelector('section');
const nav = createElementWithClass('nav');

var p = 1; // variable d'increment pour note (position)

///////////////// FONCTIONS ////////////////////////////////////////////
function addNote() {
    var notes_object = {
        position: p,
        name: `colonne  ${p}`,
        id: `colonne${p}`,
    };

    var colonne = new Object(notes_object);
    const col_name = createElementWithClass('input', 'col_name');
    const x = createElementWithClass('span', 'x');
    const note = createElementWithClass('div', 'note');
    const note_head = createElementWithClass('div', 'note_head');
    const note_body = createElementWithClass('div', 'note_body');

    note_body.setAttribute('id', `${colonne['id']}`);
    col_name.setAttribute('type', 'text');
    col_name.value = `${colonne['name']}`;
    col_name.setAttribute('disabled', 'disabled');
    x.innerText = '-';
    note_head.insertAdjacentElement('beforeend', col_name);
    note_head.insertAdjacentElement('beforeend', x);
    note.insertAdjacentElement('beforeend', note_head);
    note.insertAdjacentElement('beforeend', note_body);
    main.insertAdjacentElement('beforeend', note);

    x.addEventListener('click', (e) => {

        debut = section.firstElementChild.nextSibling.firstChild;
        fin = section.firstElementChild.nextSibling.lastChild;
        let toNext = e.target.parentNode.parentNode.nextSibling;
        let toPrevious = e.target.parentNode.parentNode.previousSibling;

        if (p > 2) {
            if (toNext) {
                let tout_tache = toNext.lastChild.querySelectorAll('.tache');
                for (let index = 0; index < tout_tache.length; index++) {
                    tout_tache[index].firstChild.style.visibility = 'hidden';
                    tout_tache[index].lastChild.style.visibility = 'hidden';
                }
                for (let index = 0; index < tout_tache.length; index++) {

                    if (toNext.nextSibling) {
                        tout_tache[index].lastChild.style.visibility = 'visible';
                    }
                    if (toNext.previousSibling) {
                        tout_tache[index].firstChild.style.visibility = 'visible';
                    }

                }
            }
            if (toPrevious) {
                let tout_tache = toPrevious.lastChild.querySelectorAll('.tache');
                for (let index = 0; index < tout_tache.length; index++) {
                    tout_tache[index].firstChild.style.visibility = 'hidden';
                    tout_tache[index].lastChild.style.visibility = 'hidden';
                }
                removeNote(e.target);
                for (let index = 0; index < tout_tache.length; index++) {

                    if (toPrevious.nextSibling) {
                        tout_tache[index].lastChild.style.visibility = 'visible';
                    }
                    if (toPrevious.previousSibling) {
                        tout_tache[index].firstChild.style.visibility = 'visible';
                    }

                }
                console.log(p);
            }
        } else {
            removeNote(e.target);
            if (p == 1) {
                nav.lastChild.remove()
            }
            console.log(p, 'oui');
        }
        console.log(p);

    });
    note_head.addEventListener('dblclick', (e) => {
        e.target.removeAttribute('disabled');
    })
    note_head.addEventListener('close', (e) => { //evenement ecouter a revoir
        e.target.setAttribute('disabled', 'disabled');
    })

}

function addTask(commentaire, date, hdebut, hfin) {

    const contenu = createElementWithClass('textarea', 'contenu');
    const left = createElementWithClass('span', 'left');
    const right = createElementWithClass('span', 'right');
    const tache = createElementWithClass('div', 'tache');
    const always_first_col = section.firstElementChild.nextSibling.firstChild.firstChild.nextSibling;
    var debut = section.firstElementChild.nextSibling.firstChild;
    var fin = section.firstElementChild.nextSibling.lastChild;
    let x = document.querySelector('.x');

    left.innerText = '<<';
    right.innerText = '>>';
    contenu.innerText = `TACHE : ${commentaire} \n Date:${date} \n Debut:${hdebut} \n Fin: ${hfin} \n `;

    tache.insertAdjacentElement('beforeend', left);
    tache.insertAdjacentElement('beforeend', contenu);
    tache.insertAdjacentElement('beforeend', right);
    always_first_col.insertAdjacentElement('beforeend', tache);

    let tout_tache = always_first_col.querySelectorAll('.tache');
    for (let index = 0; index < tout_tache.length; index++) {

        if (debut && p == 2) {
            tout_tache[index].firstChild.style.visibility = 'hidden';
            tout_tache[index].lastChild.style.visibility = 'hidden';
        }
        if (p > 2) {
            tout_tache[index].firstChild.style.visibility = 'hidden';
            tout_tache[index].lastChild.style.visibility = 'visible';
        }

    }
    add_col.addEventListener('click', () => {
        debut = section.firstElementChild.nextSibling.firstChild;
        fin = section.firstElementChild.nextSibling.lastChild;
        for (let index = 0; index < tout_tache.length; index++) {

            if (debut && p == 2) {
                tout_tache[index].firstChild.style.visibility = 'hidden';
                tout_tache[index].lastChild.style.visibility = 'hidden';
            }
            if (p > 2) {
                tout_tache[index].lastChild.style.visibility = 'visible';
            }

        }
    })
    left.addEventListener('click', (e) => {
        let WhereWeGo = e.target.parentNode.parentNode.parentNode.previousSibling.firstChild.nextSibling;
        let WhatWeMove = e.target.parentNode;
        debut = section.firstElementChild.nextSibling.firstChild;
        fin = section.firstElementChild.nextSibling.lastChild;

        if (WhereWeGo != null) {
            WhereWeGo.appendChild(WhatWeMove);
        }

        let tout_tache = WhereWeGo.querySelectorAll('.tache');

        for (let index = 0; index < tout_tache.length; index++) {

            if (fin && p > 2) {
                tout_tache[index].firstChild.style.visibility = 'hidden';
                tout_tache[index].lastChild.style.visibility = 'visible';
            }
            if (WhereWeGo.parentNode != debut) {
                tout_tache[index].firstChild.style.visibility = 'visible';
                tout_tache[index].lastChild.style.visibility = 'visible';
            }

        }
    });
    right.addEventListener('click', (e) => {
        let WhereWeGo = e.target.parentNode.parentNode.parentNode.nextSibling.firstChild.nextSibling;
        let WhatWeMove = e.target.parentNode;
        debut = section.firstElementChild.nextSibling.firstChild;
        fin = section.firstElementChild.nextSibling.lastChild;

        if (WhereWeGo != null) {
            WhereWeGo.appendChild(WhatWeMove);
            /*  e.target.style.visibility = 'hidden'; */
        }

        let tout_tache = WhereWeGo.querySelectorAll('.tache');

        for (let index = 0; index < tout_tache.length; index++) {

            if (fin && p > 2) {
                tout_tache[index].firstChild.style.visibility = 'visible';
                tout_tache[index].lastChild.style.visibility = 'hidden';
            }
            if (WhereWeGo.parentNode != fin) {
                tout_tache[index].firstChild.style.visibility = 'visible';
                tout_tache[index].lastChild.style.visibility = 'visible';
            }

        }

    });
}

function addPopUp() {
    const pop_note_head = createElementWithClass('div', 'pop_note_head');
    const pop_note_body = createElementWithClass('div', 'pop_note_body');
    const new_task = createElementWithClass('span', 'new_task');
    const pop_note = createElementWithClass('div', 'pop_note');
    const valid = createElementWithClass('input', 'validez');
    const hdebut = createElementWithId('input', 'hdebut');
    const label_textarea = createElementWithClass('label');
    const date = createElementWithId('input', 'date');
    const label_hdebut = createElementWithClass('label');
    const hfin = createElementWithId('input', 'hfin');
    const form = createElementWithClass('form', 'form');
    const textarea = createElementWithId('textarea');
    const label_date = createElementWithClass('label');
    const label_hfin = createElementWithClass('label');
    const x = createElementWithClass('span', 'x');
    const alert_tout_les_champs = createElementWithClass('small', 'tout_les_champs');
    const alert_textarea = createElementWithClass('small', 'alert_textarea');
    const alert_date = createElementWithClass('small', 'alert_date');
    const alert_hdebut = createElementWithClass('small', 'alert_hdebut');
    const alert_hfin = createElementWithClass('small', 'alert_hfin');

    label_textarea.innerText = 'Entrer les informations de la nouvelle tache ';
    label_hdebut.innerText = 'Heure de debut';
    new_task.innerText = 'Nouvelle Tache';
    label_hfin.innerText = 'Heure de fin';
    label_date.innerText = 'Date';
    x.innerText = '-';
    alert_tout_les_champs.innerText = 'Ces champs sont obligatoires !';
    alert_textarea.innerText = 'Ce champs ne peut être vide !';
    alert_date.innerText = 'Ce champs est obligatoir !';
    alert_hdebut.innerText = 'Ce champs est obligatoir !';
    alert_hfin.innerText = 'Ce champs est obligatoir !';

    label_textarea.setAttribute('for', 'textarea');
    label_hdebut.setAttribute('for', 'hdebut');
    label_date.setAttribute('for', 'date');
    label_hfin.setAttribute('for', 'hfin');
    hdebut.setAttribute('type', 'time');
    date.setAttribute('type', 'date');
    hfin.setAttribute('type', 'time');
    valid.setAttribute('type', 'submit');
    valid.setAttribute('value', 'Valider');

    form.insertAdjacentElement('beforeend', label_textarea);
    form.insertAdjacentElement('beforeend', textarea);
    form.insertAdjacentElement('beforeend', alert_textarea);
    form.insertAdjacentElement('beforeend', label_date);
    form.insertAdjacentElement('beforeend', date);
    form.insertAdjacentElement('beforeend', alert_date);
    form.insertAdjacentElement('beforeend', label_hdebut);
    form.insertAdjacentElement('beforeend', hdebut);
    form.insertAdjacentElement('beforeend', alert_hdebut);
    form.insertAdjacentElement('beforeend', label_hfin);
    form.insertAdjacentElement('beforeend', hfin);
    form.insertAdjacentElement('beforeend', alert_hfin);
    form.insertAdjacentElement('beforeend', valid);
    pop_note_head.insertAdjacentElement('beforeend', new_task);
    pop_note_head.insertAdjacentElement('beforeend', x);
    pop_note_body.insertAdjacentElement('beforeend', form);
    pop_note_body.insertAdjacentElement('beforeend', alert_tout_les_champs);
    pop_note.insertAdjacentElement('beforeend', pop_note_head);
    pop_note.insertAdjacentElement('beforeend', pop_note_body);

    document.body.appendChild(pop_note);
    document.body.classList.add('arriver_popPup');

    x.addEventListener('click', (e) => {
        removeTask(e.target);
        document.body.classList.remove('arriver_popPup');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
         alert_date.style.visibility = 'hidden';
         alert_hdebut.style.visibility = 'hidden';
         alert_hfin.style.visibility = 'hidden';
         alert_tout_les_champs.style.visibility = 'hidden';
         alert_textarea.style.visibility = 'hidden';
        let now = new Date();

        if (textarea.value != '' && date.valueAsNumber != NaN && hdebut.valueAsNumber != NaN && hfin.valueAsNumber != NaN) {
            
            if (hdebut.valueAsNumber < hfin.valueAsNumber && date.valueAsNumber >= now.getTime()) {

                addTask(textarea.value, date.value, hdebut.value, hfin.value);
                removeTask(e.target);
                document.body.classList.remove('arriver_popPup');
            } else {
                if (hdebut.valueAsNumber >= hfin.valueAsNumber) {
                    alert_hdebut.innerText = "l'heure de debut ne peux etre inferieur ou egale a l'heure de fin"
                    alert_hdebut.style.visibility = 'visible';
                }
                if (date.valueAsNumber < now.getTime()) {
                    alert_date.innerText = "La date ne peut etre inferieure a la date actuelle";
                    alert_date.style.visibility = 'visible';
                } 
            }
        }
        else
        {
            
            alert_tout_les_champs.style.visibility = 'visible';
            if (date.valueAsNumber) {
                alert_date.style.visibility = 'visible';
                console.log('first if');
            }
            if (hdebut.valueAsNumber == NaN) {
                alert_hdebut.style.visibility = 'visible';
            }
            if (hfin.valueAsNumber == NaN) {
                alert_hfin.style.visibility = 'visible';
            }
            if (textarea.value == '') {
                alert_textarea.style.visibility = 'visible';
                textarea.innerText = '';
            }
        }
    })
}

function removeNote(element) {
    if (element.parentNode.parentNode != section.firstElementChild.nextSibling.firstChild) {

        element.parentNode.parentNode.remove();
        p--;
    }
    if (p == 2 && (element.parentNode.parentNode == section.firstElementChild.nextSibling.firstChild)) {
        element.parentNode.parentNode.remove();
        p--;
    }
}

function removeTask(element) {
    element.parentNode.parentNode.remove();
}

function createElementWithClass(elementName = 'div', className = '') {
    let element = document.createElement(elementName);
    className != '' ? element.classList.add(className) : null;
    return element;
}

function createElementWithId(elementName = 'div', idName = '') {
    let element = document.createElement(elementName);
    idName != '' ? element.setAttribute('id', `${idName}`) : null;
    return element;
}

function setImage(src = '') {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    return img;
}
///////////////////////// EVENEMENT ///////////////////////////////////////////

add_col.addEventListener('click', () => {
    if (p <= 5) {
        addNote(p);
        p++;
    }
    if (p > 1) {
        nav.insertAdjacentElement('beforeend', add_note);
    }
});
add_note.addEventListener('click', () => {
    addPopUp();
})

///////////////////// QUARTIER GENERAL //////////////////////////////////////
add_col.innerText = '+';
add_note.innerText = '+';
nav.insertAdjacentElement('beforeend', add_col);

section.insertAdjacentElement('beforeend', nav);
section.insertAdjacentElement('beforeend', main);

///////////////////////////CONTROLLER////////////////////////////////////////////////////