document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("feedme JS imported successfully!");
  },
  false
);

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
