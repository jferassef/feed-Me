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

const itemContainer = document.querySelector(".itemContainer");
// const addNewItem = (event) => {
//   event.preventDefault();
//   const { value } = event.target.itemText;
//   if (!value) return;
//   const item = document.createElement("li");
//   item.classList.add("item");
//   item.addEventListener("click", changeItemState);
//   item.textContent = value;
//   itemContainer.prepend(item);
//   console.log(itemContainer.prepend(item));
//   event.target.reset();
// };

changeItemState = () => {
  const itemState = document.querySelector(".shoplist-items");
  const itemsList = document.querySelector(".list");
  for (let i = 0; i < itemsList.length; i++) {
    itemState.classList.toggle("done");
    itemState.classList.toggle("shoplist-items");
  }
};
changeItemState();

alertMessage = () => {
  const total = document.querySelector(".total");
  const message = document.querySelector(".message");
  if (parseInt(total.innerHTML) < 2) {
    message.classList.toggle("alert");
    message.classList.toggle("message");
  }
};

alertMessage();
