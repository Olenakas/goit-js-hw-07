import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ original, preview, description }) =>
    `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img 
              class="gallery__image" 
              src="${preview}" 
              alt="${description}" />
          </a>
        </li>      
        `
);
container.insertAdjacentHTML("beforeend", markup.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
console.log(galleryItems);
