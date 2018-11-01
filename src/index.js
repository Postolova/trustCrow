import './index.scss';
import { worksSwiper } from './assets/js/works';

// For All SVG
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/images/svg/', true, /\.svg$/));

window.addEventListener('load', () => {
  worksSwiper.init();
});
