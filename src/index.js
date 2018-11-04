import './index.scss';
import './assets/js/modules/slider.js';
import './assets/js/faq.js';
// For All SVG
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/images/svg/', true, /\.svg$/));

// window.addEventListener('load', () => {

// });
