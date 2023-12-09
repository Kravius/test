export default (function () {
  const hamburger = document.querySelector(".hamburger");
  const headerHumburger = document.querySelector(".header__humburger");

  console.log(hamburger);
  hamburger.addEventListener("click", (e) => {
    e.target.classList.toggle("open");
    headerHumburger.classList.toggle("open");
    document.body.classList.toggle("lock");
  });
})();
