import { FunctionModal } from "./function-modal.js";
export class Modal {
  constructor(idModal) {
    this.idModal = idModal;
    this.overlay = "";
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
  buildModal() {
    //overlaн
    this.overlay = this.createDomNode(this.overlay, "div", "overlay");
    this.overlay.innerHTML = `<div class="modal">
	 <div class="modal__img">
		<img src=${this.idModal.url} alt=${this.idModal.category}  class="modal-img"/>
	 </div>
	 <div class="modal__content">
		<h3 class="modal-title">${this.idModal.name}</h3>
		<p>
		  ${this.idModal.description}
		</p>
		<div class="radio__conteiner">
		  <p>Size</p>
		  <div class="modal-size">
			 <label>
				<input
				  type="radio"
				  name="coding-size"
				  class="real__checkbox"
				  checked
				/>
				<span class="custom_checkbox custom__s modal-radio-diraction data-add-price=${this.idModal.sizes.s["add-price"]}"
				  >${this.idModal.sizes.s.size}</span
				>
			 </label>
			 <label>
				<input type="radio" name="coding" class="real__checkbox" />
				<span class="custom_checkbox custom__m modal-radio-diraction data-add-price=${this.idModal.sizes.m["add-price"]}"
				  >${this.idModal.sizes.m.size}</span
				>
			 </label>
			 <label>
				<input type="radio" name="coding" class="real__checkbox" />
				<span class="custom_checkbox custom__l modal-radio-diraction data-add-price=${this.idModal.sizes.l["add-price"]}"
				  >${this.idModal.sizes.l.size}</span
				>
			 </label>
		  </div>
		</div>
		<div class="radio__conteiner">
		  <p>Additives</p>
		  <div class="modal-additives">
			 <label>
				<input
				  type="radio"
				  name="coding-additives"
				  class="real__checkbox"
				/>
				<span class="custom_checkbox custom__1 modal-radio-diraction data-add"
				  >${this.idModal.additives[0].name}</span
				>
			 </label>
			 <label>
				<input type="radio" name="coding" class="real__checkbox" />
				<span class="custom_checkbox custom__2 modal-radio-diraction"
				  >${this.idModal.additives[1].name}</span
				>
			 </label>
			 <label>
				<input type="radio" name="coding" class="real__checkbox" />
				<span
				  class="custom_checkbox custom__3 modal-radio-diraction"
				  >${this.idModal.additives[2].name}</span
				>
			 </label>
		  </div>
		</div>
		<div class="modal__total">
		  <h3>Total:</h3>
		  <h3 class="modal__price">${this.idModal.price}$</h3>
		</div>
		<div class="modal__recomendation">
		  <img src="./img/modal/info-empty.png" alt="icon" />
		  <p class="recomandation-text">
			 The cost is not final. Download our mobile app to see the final
			 price and place your order. Earn loyalty points and enjoy your
			 favorite coffee with up to 20% discount.
		  </p>
		</div>
		<button class="close-modalbtn">Close</button>
	 </div>
  </div>`;
    return this.overlay;
  }
}
