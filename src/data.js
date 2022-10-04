// Home page - Showcase section data
import ShowcaseImg1 from '../src/assets/img/home-sections/SmiliesSumer-01.jpg'
import ShowcaseImg2 from '../src/assets/img/home-sections/SmiliesBuisiness-01.jpg'
import ShowcaseImg3 from '../src/assets/img/home-sections/SmiliesEveryday-01.jpg'
import ShowcaseImg4 from '../src/assets/img/home-sections/SmilesWeding-01.jpg'


import proizvodImgCela from '../src/assets/img/products/proizvod-1-1300x1625.jpg'
import proizvodImgDetalj from '../src/assets/img/products/proizvod-2-1300x1625.jpg'


export const showcases = [
    // {
    //     id: 1,
    //     title: 'Smilies Summer',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio ab mollitia modi delectus iste possimus, ipsa sequi veniam!',
    //     image: ShowcaseImg1,
    //     image_description: 'Smilies summer collection',
    // },
    {
        id: 2,
        title: 'Smilies Business',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio ab mollitia modi delectus iste possimus, ipsa sequi veniam!',
        image: ShowcaseImg2,
        image_description: 'Smilies bussiness collection',
    },
    {
        id: 3,
        title: 'Smilies Every Day',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio ab mollitia modi delectus iste possimus, ipsa sequi veniam!',
        image: ShowcaseImg3,
        image_description: 'Smilies every day collection',
    },
    {
        id: 4,
        title: 'Smilies Wedding',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio ab mollitia modi delectus iste possimus, ipsa sequi veniam!',
        image: ShowcaseImg4,
        image_description: 'Smilies wedding collection',
    }
]


// export const kategorije = [

//     {
//         kat_id: 1,
//         kat_naziv_se: 'Ženska',
//         kat_naziv_en: 'Woman',
//     },
//     {
//         kat_id: 2,
//         kat_naziv_se: 'Muška',
//         kat_naziv_en: 'Men',
//     },
//     {
//         kat_id: 3,
//         kat_naziv_se: 'Nova-kolekcija',
//         kat_naziv_en: 'New-Arivals',
//     },
// ]

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
    {
        id: 8,
        ime_podkategorije: 'M.Shoes',
        kategorija_id: 3,
    },
]

export const proizvodi = [
    {
        id: 1,
        proizvod_naziv: 'Woman s slim trousers',
        cena: '14990',
        slika_cela: proizvodImgCela,
        slika_detalj: proizvodImgDetalj,
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Woman s slim trousers',
        podk_id: 1,
    },
    {
        id: 2,
        proizvod_naziv: 'Woman s regular cut trousers',
        cena: '16990',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Woman s regular cut trousers',
        podk_id: 1,
    },
    {
        id: 3,
        proizvod_naziv: 'Woman s regular cut silk trousers',
        cena: '12990',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Woman s regular cut silk trousers',
        podk_id: 1,
    },
    {
        id: 4,
        proizvod_naziv: 'Woman s slim trousers',
        cena: '16000',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Woman s slim trousers',
        podk_id: 1,
    },
    {
        id: 5,
        proizvod_naziv: 'Womans Dress',
        cena: '16990',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Womans Dress',
        podk_id: 4,
    },
    {
        id: 6,
        proizvod_naziv: 'Womans Skirt',
        cena: '12990',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Womans Skirt',
        podk_id: 3,
    },
    {
        id: 7,
        proizvod_naziv: 'Womans blazer',
        cena: '16000',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Womans blazer',
        podk_id: 2,
    },
    {
        id: 8,
        proizvod_naziv: 'Mens trousers',
        cena: '16990',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Mens trousers',
        podk_id: 5,
    },
    {
        id: 9,
        proizvod_naziv: 'Mens Jacket',
        cena: '12990',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Mens Jacket',
        podk_id: 6,
    },
    {
        id: 10,
        proizvod_naziv: 'Mens trench coat',
        cena: '16000',
        slika_cela: '',
        slika_detalj: '',
        slika_cela1: '',
        slika_cela2: '',
        slika_opis: 'Mens trench coat',
        podk_id: 7,
    },
]



// Icons