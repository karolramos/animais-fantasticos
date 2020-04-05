import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import TabNav from './modules/tabnav.js';
import ToolTip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHrFuncionamento from './modules/hrfuncionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

initAnimacaoScroll();
initDropDownMenu();
initMenuMobile();
initHrFuncionamento();
initFetchAnimais();
initFetchBitcoin();
