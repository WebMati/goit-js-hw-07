import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


galleryItems.forEach((item) => {
    const galleryItem = `
        <a class="gallery__item"
        href ="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}" /></a>`
    gallery.insertAdjacentHTML('beforeend', galleryItem);
})

var lightbox = new SimpleLightbox('.gallery__item', { 
    captionDelay: 250,
    captionsData: 'alt',
 });