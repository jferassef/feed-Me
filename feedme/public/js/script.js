document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("feedme JS imported successfully!");
  },
  false
);


async function welcomeView(){
  const imgIcon = document.querySelector(".icon-app");
await imgIcon(0);
const welcomeTxt = Document.querySelector(".welcome>h1");
await welcomeTxt(1);
const name = Document.querySelector(".welcome p");
await name(2);
}

welcomeView();