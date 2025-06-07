import brushImgRedDesktop from './images/brush/mp-red-brush-desktop.svg';
import brushImgRedMobile from './images/brush/mp-red-brush-mobile.svg';
import brushImgBlue from './images/brush/mp-blue-brush.svg';
import saba from './images/sections/picks/tiles/mp-saba-wc-en.png';
import pinnacle from './images/sections/picks/tiles/mp-pinnacle.png';
import tfgaming from './images/sections/picks/tiles/mp-tfgaming.png';
import bgPicks from './images/sections/picks/mp-picks.png';
import quoteImgTop from './images/sections/exp/quote-top.png';
import expBgArena from './images/sections/exp/arena.png';

const picksData = {
    bg: bgPicks,
    brushImgDesktop: brushImgRedDesktop,
    brushImgMobile: brushImgRedMobile,
    title: 'Pacquiao Picks',
    btnTxt: 'dolor'
};

const picksDataItem = [
    {
        title: 'saba',
        img: saba,
    },
    {
        title: 'pinnacle',
        img: pinnacle,
    },
    {
        title: 'tfgaming',
        img: tfgaming, 
    },
];

const expData = {
    title: 'PACQUIAO’S EXPERIENCE',
    txt1: 'Fusce convallis ac lectus sollicitudin luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
    txt2: 'Phasellus vitae est vitae libero faucibus porttitor. Curabitur rutrum ante sit amet convallis laoreet. Duis et aliquet nunc.',
    txt3: 'Phasellus eu consequat odio, nec accumsan',
    txt4: 'roin vitae justo in dui malesuada egestas',
    txt5: 'Vestibulum ante ipsum primis in faucibus',
    quoteText: 'Aliquam erat volutpat. Quisque dignissim ut magna non dapibus. Quisque tempus nunc quis rutrum aliquam. Donec pretium lacus sit amet malesuada eleifend. ',
    quoteImgSrc: quoteImgTop,
    expBgSrc: expBgArena,
    brushImgBlue:brushImgBlue
}

export default { picksData, picksDataItem, expData };