import refs from './refs';
import imgCard from '../templates/card-img.hbs';
const { loadMoreBtn, list, form } = refs;

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23587360-9e8d8834fc0ca0fd407cdbeb2';
const params = '?image_type=photo&orientation=horizontal';

let pageNumber = 1;
let perPage = 12;
let searchQuery = '';

form.addEventListener('submit', e => {
  e.preventDefault();
  list.innerHTML = '';
  searchQuery = e.currentTarget.elements.query.value;
  pageNumber = 1;
  const url = `${BASE_URL}/${params}&q=${searchQuery}&page=${pageNumber}&per_page=${perPage}&key=${API_KEY}`;
  fetch(url)
    .then(r => r.json())
    .then(data => {
      list.insertAdjacentHTML('beforeend', imgCard(data.hits));
    });
  loadMoreBtn.classList.remove('hidden');
});

loadMoreBtn.addEventListener('click', () => {
  pageNumber += 1;
  const url = `${BASE_URL}/${params}&q=${searchQuery}&page=${pageNumber}&per_page=${perPage}&key=${API_KEY}`;
  fetch(url)
    .then(r => r.json())
    .then(data => {
      list.insertAdjacentHTML('beforeend', imgCard(data.hits));
    });
});
