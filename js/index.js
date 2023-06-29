const btns = document.querySelector('.btns');
const pdfFrame = document.querySelector('.pdfFrame');

btns.addEventListener('click', (e) => {
  pdfFrame.src = e.target.dataset.fileLink;
});
