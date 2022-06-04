document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("feedme JS imported successfully!");
  },
  false
);

/*async function welcomeView(){
  const imgIcon = document.querySelector(".icon-app");
await imgIcon(0);
const welcomeTxt = Document.querySelector(".welcome>h1");
await welcomeTxt(1);
const name = Document.querySelector(".welcome p");
await name(2);
}
welcomeView();*/

/* function alertMessage() {
  const total = document.querySelector(".total");
  if (total.innerHTML < 2) {
    alert("Please go buy food");
  }
} 

alertMessage(); */

const itemContainer = document.querySelector(".itemContainer");
const addNewItem = (event) => {
  event.preventDefault();
  const { value } = event.target.itemText;
  if (!value) return;
  const item = document.createElement("li");
  item.addEventListener("click", changeItemState);
  item.textContent = value;
  itemContainer.prepend(item);
  console.log(itemContainer.prepend(item));
  event.target.reset();
};

changeItemState = (event) => {
  event.target.classList.toggle("done");
};
