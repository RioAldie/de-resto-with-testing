import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import '../styles/animation.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// const START = 10;
// const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#btn-menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('onlcik');
  document.querySelector('main').focus();
});
