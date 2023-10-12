import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");

container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
container.addEventListener("click", handlerClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
  `
    )
    .join("");
}

function handlerClick(evt) {
    evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image") ) {
    return;
  }
    const link = evt.target.dataset.source;
const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${link}" width="800" height="600">
    </div>
`)

  instance.show();
  document.addEventListener("keydown", handlerPress.bind(instance));
}


function handlerPress(event) {
    if (event.key !== "Escape") {
        return;
    }
    this.close();
    document.removeEventListener("keydown", handlerPress);
}

console.log(galleryItems);
