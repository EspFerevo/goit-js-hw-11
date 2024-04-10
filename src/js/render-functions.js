'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function displayImages(images) {
  const gallery = document.getElementById('gallery');

  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  images.forEach(image => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });

  new SimpleLightbox('#gallery .image-card');
}

function createImageCard(image) {
  const card = document.createElement('a');
  card.classList.add('image-card');

  const img = document.createElement('img');
  img.src = image.previewURL;
  img.alt = image.tags;

  const likes = document.createElement('p');
  likes.textContent = `Likes: ${image.likes}`;

  const views = document.createElement('p');
  views.textContent = `Views: ${image.views}`;

  const comments = document.createElement('p');
  comments.textContent = `Comments: ${image.comments}`;

  const downloads = document.createElement('p');
  downloads.textContent = `Downloads: ${image.downloads}`;

  card.appendChild(img);
  card.appendChild(likes);
  card.appendChild(views);
  card.appendChild(comments);
  card.appendChild(downloads);

  return card;
}
