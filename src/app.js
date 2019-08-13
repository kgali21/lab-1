import horns from '../data/images.js';
import htmlToDOM from '../utils/html-to-DOM.js';
import renderHornItem from '../src/render-horns.js';

const list = document.querySelector('.horns');

horns.forEach(function(hornItem){
    const html = renderHornItem(hornItem);

    const dom = htmlToDOM(html);

    list.appendChild(dom);
});