import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHrFuncionamento from './modules/hrfuncionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();


initAnimacaoScroll();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initHrFuncionamento();
initFetchAnimais();
initFetchBitcoin();
