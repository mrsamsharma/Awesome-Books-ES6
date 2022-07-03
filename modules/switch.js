import { listBtn, bookAddBtn, contactBtn } from '../index.js';

const navigationSwitch = () => {
  listBtn.addEventListener('click', () => {
    document.querySelector('.books').style.display = 'block';
    document.querySelector('.add-book').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
  });

  bookAddBtn.addEventListener('click', () => {
    document.querySelector('.add-book').style.display = 'block';
    document.querySelector('.books').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
  });

  contactBtn.addEventListener('click', () => {
    document.querySelector('.contact').style.display = 'flex';
    document.querySelector('.books').style.display = 'none';
    document.querySelector('.add-book').style.display = 'none';
  });
};

export default navigationSwitch;