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

let instance;

function onClick(event) {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== "IMG") {
    return;
  }

  const largeImageUrl = target.dataset.source;

  instance = basicLightbox.create(
    `
        <img src="${largeImageUrl}" alt="${target.alt}" />
      `,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscape = event.code === ESC_KEY_CODE;
  if (isEscape && instance) {
    instance.close();
  }
}

// Change code below this line
console.log(galleryItems);
