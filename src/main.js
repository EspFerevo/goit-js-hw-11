import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import { displayImages } from './js/render-functions.js';

document
  .getElementById('search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (query === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search keyword.',
      });
      return;
    }

    document.getElementById('search-input').value = '';

    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    searchImages(query)
      .then(data => {
        if (data.hits.length === 0) {
          throw new Error('No images found');
        }
        return data.hits;
      })

      .then(images => {
        if (images.length === 0) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
          return;
        }
        displayImages(images);
      })

      .catch(error => {})

      .finally(() => {
        loader.style.display = 'none';
      });
  });
