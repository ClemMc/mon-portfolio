import BookiLogo from '../assets/BookiLogo.png';
import OhmyfoodLogo from '../assets/ohmyfood.png';
import SophieBluelLogo from '../assets/SophieBluelLogo.png';
import KasaLogo from '../assets/KasaLogo.png';

const projectsData = [
    {
        logo: BookiLogo,
        category: ['html', 'css'],
        Description: 'Créez la page d\'accueil d\'une agence de voyage avec HTML & CSS',
        Title: 'Booki',
        link: 'https://clemmc.github.io/P3-Booki/'
    },
    {
        logo: OhmyfoodLogo,
        category: ['html','css','sass'],
        Title: 'Ohmyfood',
        Description: 'Améliorez l\'interface d\'un site mobile avec des animations CSS',
        link: 'https://clemmc.github.io/ohmyfood/'
    },
    {
        logo: SophieBluelLogo,
        category: ['javascript'],
        Title: 'Sophie Bluel',
        Description: 'Créez une page web dynamique avec JavaScript',
        link: 'https://github.com/ClemMc/Sophie-Bluel'
    },
    {
        logo: KasaLogo, 
        category: ['react','sass','formation'],
        Title: 'Kasa',
        Description: 'Créez une application web de location immobilière avec React',
        link: 'https://github.com/ClemMc/p7-kasa'
    },
];

export default projectsData;
