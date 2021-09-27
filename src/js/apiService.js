const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23587360-9e8d8834fc0ca0fd407cdbeb2';
const params = '?image_type=photo&orientation=horizontal';

const url = `${BASE_URL}/${params}&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
