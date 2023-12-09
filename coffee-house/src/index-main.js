 import './swiper.js';

 const btns = document.querySelectorAll('.favourites__btn-line');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});