

export function setStyles(background, text, backgroundImage) {
  document.body.style.backgroundColor = background;
  document.body.style.color = text;
  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
  }
}
