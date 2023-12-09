export default (function () {
  let items = document.querySelectorAll(".slider__kart");
  let BTN_left = document.querySelector(".favourites__btn-left");
  let BTN_right = document.querySelector(".favourites__btn-right");
  let currentItem = 0;
  let isEnabled = true; //не дает возможность повторного нажатия

  function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length; //елемент массива добавляется к длине и смотрим на остаток для определения где мы в массиве
  }

  //проходимся по елементу и с помощью css супаускаем анимацию,выбирая с помошью каласса направления анимация класс(to-left или to-right )
  function hideItem(direction) {
    isEnabled = false; //не дает возможность повторного нажатия
    items[currentItem].classList.add(direction);
    console.log(direction);
    items[currentItem].addEventListener("animationend", function () {
      this.classList.remove("active-swipe", direction);
    });
  }

  // с какой стороны будет появлятся новый елемент(задаем form-right ili form-left)
  function showItem(direction) {
    items[currentItem].classList.add("next", direction);
    console.log(2);
    items[currentItem].addEventListener("animationend", function () {
      console.log(3);
      this.classList.remove("next", direction);
      this.classList.add("active-swipe");
      isEnabled = true;
    });
  }

  function nextItem(n) {
    if (items.length - 1 === n) {
      hideItem("to-right");
      changeCurrentItem(1);
      showItem("from-left");
      hideItem("to-right");
      changeCurrentItem(0);
      showItem("from-left");
    } else {
      hideItem("to-left");
      changeCurrentItem(n + 1);
      showItem("from-right");
    }
  }

    function previousItem(n) {
      hideItem("to-right");
      changeCurrentItem(n - 1);
      showItem("from-left");
    }

  BTN_right.addEventListener("click", function () {
    if (isEnabled) {
      //не дает возможность повторного нажатия
      nextItem(currentItem);
    }
  });

  BTN_left.addEventListener("click", function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });
})();

function swipeDetect(el) {
  let surface = el;
}

// connect conteiner element we wont that swiper work to all element inside
let el = document.querySelector(".favourites__conteiner");
swipeDetect(el);
