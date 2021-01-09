import cat from './images/business-cat.jpg';
import { obj } from './constants';

const phrase = () => 'Hello Everyone!<br/>';
const objValues = () => Object.values(obj);
console.log(phrase(), objValues());
const rootEl = document.getElementById('root');
const img = new Image(320, 300);
img.src = cat;

if (rootEl) {
  rootEl.innerHTML = phrase();
  rootEl.appendChild(img);
}
