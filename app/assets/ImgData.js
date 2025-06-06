import brushImgRedDesktop from './images/brush/mp-red-brush-desktop.svg';
import brushImgRedMobile from './images/brush/mp-red-brush-mobile.svg';
import saba from './images/sections/picks/tiles/mp-saba-wc-en.png';
import pinnacle from './images/sections/picks/tiles/mp-pinnacle.png';
import tfgaming from './images/sections/picks/tiles/mp-tfgaming.png';
import bgPicks from './images/sections/picks/mp-picks.png';

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
]

export default { picksData, picksDataItem };