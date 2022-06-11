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

// window.onload = () => {
//   const printChart = (labels, data) => {
//     const ctx = document.querySelector("#myChart").getContext("2d");

//     const chart = new Chart(ctx, {
//       type: "bar",
//       labels,
//       datasets: [{ label: "quantities", backgroundColor: "blue", data }],
//     });
//   };
// };
