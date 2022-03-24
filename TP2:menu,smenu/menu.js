const menue = document.getElementById('leMenu');
const aside = document.createElement('aside');
const section = document.getElementsByTagName('section');
var bool = null;


///////DEFINITION DE L'OBJET INSERTION DU MENU///////////////
var menu = {
    basic_menu: function (elt1 = '', elt2 = '', elt3 = '', elt4 = '') {
        const label = document.createElement('label');

        first = elt1 != '' ? document.createElement(`${elt1}`) : '';
        input = elt2 != '' ? document.createElement(`${elt2}`) : '';
        bad = elt3 != '' ? document.createElement(`${elt3}`) : '';
        last = elt4 != '' ? document.createElement(`${elt4}`) : '';

        elt1 != '' ? label.insertAdjacentElement('beforeend', first) : '';
        elt2 != '' ? label.insertAdjacentElement('beforeend', input) : '';
        elt3 != '' ? label.insertAdjacentElement('beforeend', bad) : '';
        elt4 != '' ? label.insertAdjacentElement('beforeend', last) : '';

        return label;
    },
    sous_menu: function (elt1, elt2, elt3, elt4) {
        this.basic_menu(elt1, elt2, elt3, elt4);
    },
    set_attrib: function (elt, attrib, value) {
        elt.setAttribute(`${attrib}`, `${value}`);
    }

}
////////////////DEFINITION DES INSTANCES ///////////////////
var Dashboard = new Object(menu);
var exemple = new Object(menu);
var Widgets = new Object(menu);
var Layouts = new Object(menu);
var Tables = new Object(menu);
var Charts = new Object(menu);
var Search = new Object(menu);
var admin = new Object(menu);
var Forms = new Object(menu);
var alex = new Object(menu);
var hr = new Object(menu);
var UI = new Object(menu);

///////////////CREATION D'ELEMENT/////////////////////////////////////////////

var Layouts_s = Layouts.basic_menu('img', 'span', 'span', 'span');
var Dashboards = Dashboard.basic_menu('img', 'span', 'span');
var Widgets_s = Widgets.basic_menu('img', 'span', 'span');
var Charts_s = Charts.basic_menu('img', 'span', 'span');
var Tables_s = Tables.basic_menu('img', 'span', 'span');
var Forms_s = Forms.basic_menu('img', 'span', 'span');
var UIs = UI.basic_menu('img', 'span', 'span');
var admins = admin.basic_menu('img', 'span');
var alexs = alex.basic_menu('img', 'span');
var exemples = exemple.basic_menu('span');
var hrs = hr.basic_menu('hr');

///////////////INSERTION DES DONNEES//////////////////////////////////////////////

alexs.firstChild.nextSibling.insertAdjacentText("beforeend", "Alexander Pierce");
Dashboards.firstChild.nextSibling.insertAdjacentText("beforeend", "Dashboard");
admins.firstChild.nextSibling.insertAdjacentText("beforeend", "AdminLTE 3");
Widgets_s.firstChild.nextSibling.insertAdjacentText("beforeend", "Widgets");
Layouts_s.firstChild.nextSibling.insertAdjacentText("beforeend", "Layouts");
Charts_s.firstChild.nextSibling.insertAdjacentText("beforeend", "Charts");
Tables_s.firstChild.nextSibling.insertAdjacentText("beforeend", "Tables");
Forms_s.firstChild.nextSibling.insertAdjacentText("beforeend", "Forms");
UIs.firstChild.nextSibling.insertAdjacentText("beforeend", "UI");

admins.firstChild.setAttribute('src', 'imageonline-co-textimage.png');
exemples.firstChild.insertAdjacentText("beforeend", "Exemples");
Dashboards.firstChild.setAttribute('src', 'Capture.png');
Widgets_s.firstChild.setAttribute('src', 'Capture.png');
Layouts_s.firstChild.setAttribute('src', 'Capture.png');
Charts_s.firstChild.setAttribute('src', 'Capture.png');
Tables_s.firstChild.setAttribute('src', 'Capture.png');
Forms_s.firstChild.setAttribute('src', 'Capture.png');
alexs.firstChild.setAttribute('src', 'Capture.png');
UIs.firstChild.setAttribute('src', 'Capture.png');

Dashboard.set_attrib(Dashboards, 'class', 's_menu');
Widgets.set_attrib(Widgets_s, 'class', 's_menu');
Layouts.set_attrib(Layouts_s, 'class', 's_menu');
Charts.set_attrib(Charts_s, 'class', 's_menu');
Tables.set_attrib(Tables_s, 'class', 's_menu');
Forms.set_attrib(Forms_s, 'class', 's_menu');
admin.set_attrib(admins, 'class', 's_menu');
alex.set_attrib(alexs, 'class', 's_menu');
UI.set_attrib(UIs, 'class', 's_menu');

////////////////////INSERTION DE MENUS/////////////////////////////////////



menue.addEventListener("click", () => {
    if (bool != true) {
        
        aside.replaceChildren('');
        section[0].insertAdjacentElement("afterbegin", aside);
        aside.appendChild(admins);
        aside.appendChild(alexs);
        aside.appendChild(Dashboards);
        aside.appendChild(Widgets_s);
        aside.appendChild(Layouts_s);
        aside.appendChild(Charts_s);
        aside.appendChild(UIs);
        aside.appendChild(Forms_s);
        aside.appendChild(Tables_s);
        aside.appendChild(exemples);

        bool = true;

    } else {
        aside.replaceChildren('');

        Layouts_s = Layouts.basic_menu('img');
        Dashboards = Dashboard.basic_menu('img');
        Widgets_s = Widgets.basic_menu('img');
        Charts_s = Charts.basic_menu('img');
        Tables_s = Tables.basic_menu('img');
        Forms_s = Forms.basic_menu('img');
        UIs = UI.basic_menu('img');
        admins = admin.basic_menu('img');
        alexs = alex.basic_menu('img');
        exemples = exemple.basic_menu('span');
        hrs = hr.basic_menu('hr');

        admins.firstChild.setAttribute('src', 'imageonline-co-textimage.png');
        exemples.firstChild.insertAdjacentText("beforeend", "Exemples");
        Dashboards.firstChild.setAttribute('src', 'Capture.png');
        Widgets_s.firstChild.setAttribute('src', 'Capture.png');
        Layouts_s.firstChild.setAttribute('src', 'Capture.png');
        Charts_s.firstChild.setAttribute('src', 'Capture.png');
        Tables_s.firstChild.setAttribute('src', 'Capture.png');
        Forms_s.firstChild.setAttribute('src', 'Capture.png');
        alexs.firstChild.setAttribute('src', 'Capture.png');
        UIs.firstChild.setAttribute('src', 'Capture.png');

        aside.appendChild(admins);
        aside.appendChild(alexs);
        aside.appendChild(Dashboards);
        aside.appendChild(Widgets_s);
        aside.appendChild(Layouts_s);
        aside.appendChild(Charts_s);
        aside.appendChild(UIs);
        aside.appendChild(Forms_s);
        aside.appendChild(Tables_s);
        aside.appendChild(exemples);

        bool = false;
    }

})