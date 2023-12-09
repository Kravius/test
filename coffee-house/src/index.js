import myJson from "./products.json" assert { type: "json" };
import { Modal } from "./generation-model.js";
import { FunctionModal } from "./function-modal.js";
import './swiper.js';
import "./hamburger.js";
const shop = document.querySelector(".coffe__shop");
const radioConteiner = document.querySelectorAll(".radio-conteiner-main");
const namigReloadBTN = document.querySelector(".namig__reload");

let arrNamingShop = [];

radioConteiner.forEach((el) => {
  el.addEventListener("click", (e) => {
    const isCustomCheckbox =
      e.target.classList.contains("custom_checkbox") &&
      e.target.tagName === "SPAN";
    if (isCustomCheckbox) {
      createNamingShop(myJson, e.target.textContent.toLowerCase());
    }
  });
});

function createNamingShop(arr, naming = "coffee") {
  const screenWidth = window.innerWidth;
  shop.innerHTML = "";
  arr.forEach((el, index) => {
    if (el.category === naming) {
      console.log(12);
      let blok = document.createElement("div");
      blok.className = "naming";
      blok.setAttribute("data-id", index);
      blok.innerHTML = `<div class="naming__conteiner-img">
		<img src=${el.url} alt=${el.name} />
	 </div>
	 <div class="namig__content">
		<h3>${el.name}</h3>
		<p>
		  ${el.description}
		</p>
		</div>
		<h3 class="naming__price">$${el.price}</h3>`;
      blok.addEventListener("click", (e) => {
        const modal = new Modal(el);
        const FuncnModal = new FunctionModal();
        document.body.append(modal.buildModal());
        FuncnModal.closeModalWindow();
      });
      shop.append(blok);
    }
  });
  arrNamingShop = document.querySelectorAll(".naming");
}
createNamingShop(myJson);

namigReloadBTN.addEventListener("click", (e) => {});
