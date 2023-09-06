// module.js
export function createModule(config, imageSrc) {
  const object = document.createElement('img');
  object.src = imageSrc;
  object.style.position = 'absolute';
  object.style.left = config.x + 'px';
  object.style.top = config.y + 'px';
  
  document.body.appendChild(object);

  function move(direction) {
    if (direction === 'up') {
      config.y -= config.speed;
    } else if (direction === 'down') {
      config.y += config.speed;
    } else if (direction === 'left') {
      config.x -= config.speed;
    } else if (direction === 'right') {
      config.x += config.speed;
    }

    object.style.left = config.x + 'px';
    object.style.top = config.y + 'px';
  }

  return {
    move
  };
}
