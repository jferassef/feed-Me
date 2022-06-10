document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("feedme JS imported successfully!");
  },
  false
);

// addItemEvent = () => {
//   const shopItems = document.querySelector(".shoplist-items");
//   shopItems.addEventListener("click", changeItemState);
// };

// changeItemState = () => {
//   shopItems.target.classList.toggle("done");
// };

// addItemEvent();

alertMessage = () => {
  const total = document.querySelector(".total");
  const alertMessage = document.querySelector(".alert-message");
  console.log(total);
  console.log(alertMessage);
  if (total.innerHTML <= 2) {
    alertMessage.classList.toggle("hidden");
  }
};

alertMessage();
