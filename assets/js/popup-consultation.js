function popup() {
  const popUpShowButton = document.querySelector("#button-consultation");
  const popUp = document.querySelector("#consultation");
  const closeButton = document.querySelector(".popup-consultation__close");

  function closePopUp() {
    popUp.style.top = "-300%";
  }

  popUpShowButton.addEventListener("click", () => {
    popUp.style.top = "0";
  });

  popUp.addEventListener("click", function (e) {
    if (e.target == this) closePopUp();
  });
  closeButton.addEventListener("click", closePopUp);
}
window.addEventListener("load", popup);
