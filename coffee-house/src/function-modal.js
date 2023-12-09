export class FunctionModal {
  constructor() {
    // this.btn = document.querySelector('.close-modalbtn');
    // this.overlay = document.querySelector('.overlay');
  }
  closeModalWindow() {
    let closeBtn = document.querySelector(".close-modalbtn");
    let overlay = document.querySelector(".overlay");
    closeBtn.addEventListener("click", (e) => {
      if (e.target.classList.contains("close-modalbtn")) {
        document.body.removeChild(overlay);
      }
    });
    overlay.addEventListener("click", (e) => {
		 if (e.target.classList.contains("overlay")) {
        document.body.removeChild(overlay);
      }
    });
  }
}
