RECETTE_ALEATOIR = 'https://www.themealdb.com/api/json/v1/1/random.php';
var genere = createElementWithClass('div', 'genere');

getRecette(RECETTE_ALEATOIR);

///////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////

function addRecette(data) {
    const container = createElementWithClass('div', 'container');
    const conteneur = document.querySelector('.container');
    const section = document.querySelector('section');
    let foot = createElementWithClass('div', 'foot');
    let head = createElementWithClass('div', 'head');
    let form = createElementWithClass('form');
    let search = createElementWithClass('input', 'search');
    let recette = createElementWithClass('div', 'recette');
    let generer = createElementWithClass('div', 'generer');
    let bar_like = createElementWithClass('div', 'bar_like');
    let nom_de_la_recette = createElementWithClass('span', 'nom_de_la_recette');
    let iflav = createElementWithClass('span', 'iflav');


    search.setAttribute('placeholder', 'Search');
    form.insertAdjacentElement("beforeend", search);
    head.insertAdjacentElement('beforeend', form);
    genere.innerText = 'Generer une recette'
    generer.insertAdjacentElement('beforeend', genere);
    generer.style.backgroundImage = `url(${data.strMealThumb})`;
    nom_de_la_recette.innerText = data.strMeal;
    bar_like.insertAdjacentElement('beforeend', nom_de_la_recette);
    bar_like.insertAdjacentElement('beforeend', iflav);
    recette.insertAdjacentElement('beforeend', generer);
    recette.insertAdjacentElement('beforeend', bar_like);

    container.insertAdjacentElement('afterbegin', head);
    foot.insertAdjacentElement('beforeend', recette);
    container.insertAdjacentElement('beforeend', foot);
    section.appendChild(container);
    document.body.appendChild(section);
}

function createElementWithClass(elementName = 'div', className = '') {
    let element = document.createElement(elementName);
    className != '' ? element.classList.add(className) : null;

    return element;
}

function setImage(src = '') {
    let img = document.createElement('img');
    img.setAttribute('src', src);

    return img;
}

function getRecette(params) {
    fetch(params)
        .then((e) => {
            return e.json();
        }).then((e) => {
            addRecette(e.meals[0]);
            genere.addEventListener('click',()=>{
                ingredients(e.meals[0]);
            })
        })
}

function ingredients(data) {
    let details = createElementWithClass('div', 'details');
    let first_detail = createElementWithClass('div', 'first_detail');
    let second_detail = createElementWithClass('div', 'second_detail');
    let third_detail = createElementWithClass('div', 'third_detail');
    let first_first_detail = createElementWithClass('div', 'first_first_detail');
    let second_first_detail = createElementWithClass('div', 'second_first_detail');
    let first_third_detail = createElementWithClass('div', 'first_third_detail');
    let second_third_detail = createElementWithClass('div', 'second_third_detail');
    let titre_ingredient_third_detail = createElementWithClass('div', 'titre_ingredient_third_detail');
    let ul = createElementWithClass('ul');

    for (let index = 0; index < 20; index++) {

        if (data[`strIngredient${index+1}`] != "") {
            let li = createElementWithClass('li');
            li.innerText = data[`strIngredient${index+1}`];
            ul.insertAdjacentElement('beforeend', li);
        }
    }

    second_third_detail.appendChild(ul);

    second_detail.style.backgroundImage = `url(${data.strMealThumb})`
    first_first_detail.innerText = data.strMeal;
    second_first_detail.innerText = 'X';
    first_third_detail.innerText = data.strInstructions;
    titre_ingredient_third_detail.innerText = 'Ingredients';
    first_detail.insertAdjacentElement('beforeend', first_first_detail);
    first_detail.insertAdjacentElement('beforeend', second_first_detail);
    third_detail.insertAdjacentElement('beforeend', first_third_detail);
    third_detail.insertAdjacentElement('beforeend', titre_ingredient_third_detail);
    third_detail.insertAdjacentElement('beforeend', second_third_detail);

    details.insertAdjacentElement('beforeend', first_detail);
    details.insertAdjacentElement('beforeend', second_detail);
    details.insertAdjacentElement('beforeend', third_detail);

    document.body.appendChild(details);

    second_first_detail.addEventListener('click',()=>{
        details.remove();
    })
} 

