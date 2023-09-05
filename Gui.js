// module.js
const createButton = (text, onClick) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", onClick);
  return button;
};

const createText = (content) => {
  const textElement = document.createElement("p");
  textElement.innerText = content;
  return textElement;
};

const createLink = (text, url) => {
  const linkElement = document.createElement("a");
  linkElement.innerText = text;
  linkElement.href = url;
  return linkElement;
};

const createImage = (src, alt) => {
  const imageElement = document.createElement("img");
  imageElement.src = src;
  imageElement.alt = alt;
  return imageElement;
};

export { createButton, createText, createLink, createImage };
