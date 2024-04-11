'use strict';

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

    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    searchImages(query)
      .then(images => {
        displayImages(images);
      })
      .catch(error => {
        // Обработка ошибок
      })
      .finally(() => {
        loader.style.display = 'none';
      });
  });
