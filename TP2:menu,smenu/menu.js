const menus = document.getElementById('menu');
menus.addEventListener('click',menu);


function menu() {
    
    const section = document.getElementsByTagName('section');
    const aside = document.createElement('aside');
    const hr = document.createElement('hr');
    const input_search = document.createElement('input');
    const label_search = document.createElement('label');
    const img_search = document.createElement('img');
    
    input_search.setAttribute('type', 'search');
    input_search.setAttribute('placeholder', 'Search');
    input_search.setAttribute('id', 'input_search');
    img_search.setAttribute('src', 'icone');
    label_search.insertAdjacentElement('afterbegin', input_search);
    label_search.insertAdjacentElement('beforeend', img_search);
    section[0].insertAdjacentElement("afterbegin", aside);


    for (let index = 0; index < 10; index++) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        div.setAttribute('class', 's_menu');
        img.setAttribute('src', 'chemin');
        div.appendChild(img);
        aside.insertAdjacentElement("beforeend", div);
    }

    aside.insertBefore(hr, aside.children[2]);
    aside.children[3].removeChild(aside.children[3].firstChild);
    aside.children[3].appendChild(label_search);
    aside.children[0].insertAdjacentText("beforeend", "AdminLTE 3");
    aside.children[1].insertAdjacentText("beforeend", "Alexander Pierce");
    aside.children[0].firstChild.setAttribute('src', 'imageonline-co-textimage.png');
    aside.children[1].firstChild.setAttribute('src', 'Capture.png');
    //aside.children[2].insertAdjacentText("beforeend", "");
    //A la troisieme position il y a l'element <hr>
    aside.children[4].insertAdjacentText("beforeend", "Dashboard");
    aside.children[5].insertAdjacentText("beforeend", "Widgets");
    aside.children[6].insertAdjacentText("beforeend", "Layouts Options");
    aside.children[7].insertAdjacentText("beforeend", "Charts");
    aside.children[8].insertAdjacentText("beforeend", "UI Elements");
    aside.children[9].insertAdjacentText("beforeend", "Forms");
    aside.children[10].insertAdjacentText("beforeend", "Tables");

}


