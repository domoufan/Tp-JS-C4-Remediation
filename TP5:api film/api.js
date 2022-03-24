const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const search = document.getElementById('search');
const form = document.getElementById('form');
const les_films = createElementWithClass('div', 'les_films');
getFilm(APIURL);

function addmovie(data) {
    les_films.innerHTML = '';
    data.forEach((element) => {

        let film = createElementWithClass('div', 'film');
        let desc = createElementWithClass('div', 'desc');
        let description = createElementWithClass('div', 'description');

        film.insertAdjacentElement('beforeend', setImage(IMGPATH + element.poster_path));
        let h3 = createElementWithClass('h3');
        let note = createElementWithClass('span', 'note')
        h3.innerText = element.title;
        note.innerText = element.vote_average;
        description.innerText = element.overview;

        desc.insertAdjacentElement('beforeend', h3);
        desc.insertAdjacentElement('beforeend', note);


        film.insertAdjacentElement('beforeend', desc);
        film.insertAdjacentElement('beforeend', description);
        les_films.insertAdjacentElement('beforeend', film);
        document.body.appendChild(les_films);
    });
    /*  console.log(les_films); */

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const term = search.value;
    if (term) {
        getFilm(SEARCHAPI + term);
        console.log(SEARCHAPI + term);
    }
})

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

function getFilm(params) {
    fetch(params)
        .then((e) => {
            return e.json();
        }).then((e) => {
            addmovie(e.results);
        })
}