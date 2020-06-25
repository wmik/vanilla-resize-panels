const state = {
  isDragging: false
};

let dragBarElement = document.querySelector('.resizable-drag-bar');
let resizeSideElement = document.querySelector('.resizable-side');

function handleResize(e) {
  let previousWidth = resizeSideElement.style.width.replace(/\D/g, '');

  previousWidth = parseInt(previousWidth, 10);

  if (state.isDragging) {
    resizeSideElement.style.width = `${previousWidth + e.movementX}px`;
  }
}

dragBarElement.addEventListener('mousedown', e => {
  e.preventDefault();
  state.isDragging = true;
  document.addEventListener('mousemove', handleResize);
});

document.addEventListener('mouseup', () => {
  if (state.isDragging) {
    document.removeEventListener('mousemove', handleResize);
    state.isDragging = false;
  }
});
