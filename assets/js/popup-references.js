
function popupSec() {
  const popUpSecShowButton = document.querySelector(".references__button");
  const popUpSec = document.querySelector("#popup-references");
  const closeButtonSec = document.querySelector(".popup-references__close");

  function closePopUpSec() {
    popUpSec.style.top = "-300%";
  }

  popUpSecShowButton.addEventListener("click", () => {
    popUpSec.style.top = "0";
  });

  popUpSec.addEventListener("click", function (e) {
    if (e.target == this) closePopUpSec();
  });
  closeButtonSec.addEventListener("click", closePopUpSec);
}
window.addEventListener("load", popupSec);