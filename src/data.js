// Home page - Showcase section data
import ShowcaseImg1 from '../src/assets/img/home-sections/SmiliesSumer-01.jpg'
import ShowcaseImg2 from '../src/assets/img/home-sections/SmiliesBuisiness-01.jpg'
import ShowcaseImg3 from '../src/assets/img/home-sections/SmiliesEveryday-01.jpg'
import ShowcaseImg4 from '../src/assets/img/home-sections/SmilesWeding-01.jpg'


import proizvodImgCela from '../src/assets/img/products/proizvod-1-1300x1625.jpg'
import proizvodImgDetalj from '../src/assets/img/products/proizvod-2-1300x1625.jpg'


export const showcases = [
    {
        id: 1,
        title: 'Smilies Summer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio ab mollitia modi delectus iste possimus, ipsa sequi veniam!',
        image: ShowcaseImg1,
    },
    {
        id: 2,
        title: 'Smilies Business',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio ab mollitia modi delectus iste possimus, ipsa sequi veniam!',
        image: ShowcaseImg2,
    },
    {
        id: 3,
        title: 'Smilies Every Day',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio ab mollitia modi delectus iste possimus, ipsa sequi veniam!',
        image: ShowcaseImg3,
    },
    {
        id: 4,
        title: 'Smilies Wedding',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio ab mollitia modi delectus iste possimus, ipsa sequi veniam!',
        image: ShowcaseImg4,
    }
]


export const kategorije = [

    {
        id: 1,
        ime_kategorije: 'Woman',
    },
    {
        id: 2,
        ime_kategorije: 'Men',
    },
    {
        id: 3,
        ime_kategorije: 'New Arivals',
    },
]

export const podKategorije = [

    {
        id: 1,
        ime_podkategorije: 'W.Trousers',
        kategorija_id: 1,
    },
    {
        id: 2,
        ime_podkategorije: 'W.Blazer',
        kategorija_id: 1,
    },
    {
        id: 3,
        ime_podkategorije: 'W.Skirt',
        kategorija_id: 1,
    },
    {
        id: 4,
        ime_podkategorije: 'W.Dress',
        kategorija_id: 1,
    },
    {
        id: 5,
        ime_podkategorije: 'M.Trousers',
        kategorija_id: 2,
    },
    {
        id: 6,
        ime_podkategorije: 'M.Jacket',
        kategorija_id: 2,
    },
    {
        id: 7,
        ime_podkategorije: 'M.Trench',
        kategorija_id: 2,
    },


]

export const proizvodi = [
    {
        id: 1,
        proizvod_naziv: 'Woman s slim trousers',
        cena: '14990',
        slika_cela: proizvodImgCela,
        slika_detalj: proizvodImgDetalj,
    },
    {
        id: 2,
        proizvod_naziv: 'Woman s regular cut trousers',
        cena: '16990',
        slika_cela: '',
        slika_detalj: '',
    },
    {
        id: 3,
        proizvod_naziv: 'Woman s regular cut silk trousers',
        cena: '12990',
        slika_cela: '',
        slika_detalj: '',
    },
    {
        id: 4,
        proizvod_naziv: 'Woman s slim trousers',
        cena: '16000',
        slika_cela: '',
        slika_detalj: '',
    },
]



// Icons
