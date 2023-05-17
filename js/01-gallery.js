import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ original, preview, description }) =>
    `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
    `
);
container.insertAdjacentHTML("beforeend", markup.join(""));

container.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== "IMG") {
    return;
  }

  const largeImageUrl = target.dataset.source;

  const instance = basicLightbox.create(`
        <img src="${largeImageUrl}" alt="${target.alt}" />
      `);
  instance.show();

  document.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    const isEscey = event.code === ESC_KEY_CODE;
    if (isEscey) {
      instance.close();
    }
  }
}
// Change code below this line

console.log(galleryItems);
