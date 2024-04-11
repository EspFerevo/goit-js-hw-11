'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

  new SimpleLightbox('#gallery .image-card').refresh();
}

function createImageCard(image) {
  const card = document.createElement('a');
  card.classList.add('image-card');
  card.href = image.largeImageURL;

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;

  const metadataContainer = document.createElement('div');
  metadataContainer.classList.add('metadata-container');

  const likes = document.createElement('p');
  likes.textContent = `Likes: ${image.likes}`;
  metadataContainer.appendChild(likes);

  const views = document.createElement('p');
  views.textContent = `Views: ${image.views}`;
  metadataContainer.appendChild(views);

  const comments = document.createElement('p');
  comments.textContent = `Comments: ${image.comments}`;
  metadataContainer.appendChild(comments);

  const downloads = document.createElement('p');
  downloads.textContent = `Downloads: ${image.downloads}`;
  metadataContainer.appendChild(downloads);

  card.appendChild(img);
  card.appendChild(metadataContainer);

  card.addEventListener('click', function (event) {
    event.preventDefault();
    iziToast.show({
      title: image.tags,
    });
  });

  return card;
}
