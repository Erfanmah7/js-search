const inputText = document.querySelector(".input-text");
const buttons = document.querySelectorAll(".filter");
const categorys = document.querySelectorAll(".product-item");
const buttonNumber = document
  .getElementById("search-number")
  .querySelector("button");

  const changesyle = (buttonKey) => {
    buttons.forEach((button) => {
      if (button.dataset.filter === buttonKey) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    });
  };

const searchText = (event) => {
  const text = event.target.value.toLowerCase().trim();
  categorys.forEach((product) => {
    const categoryItem = product.children[1].innerText.toLowerCase();
    if (categoryItem.includes(text)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const searchNumber = (event) => {
  const textNumber = +event.target.parentElement.children[0].value;
  categorys.forEach((product) => {
    const price1 = product.children[2].innerText;
    const price = +price1.split(" ")[1];
    if (!textNumber) {
      product.style.display = "block";
    } else {
      textNumber === price
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const searchButton = (event) => {
  const buttonKey = event.target.dataset.filter;
  changesyle(buttonKey);

  categorys.forEach((product) => {
    if (buttonKey === "all") {
      product.style.display = "block";
    } else {
      buttonKey.includes(product.dataset.category.toLowerCase())
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};



buttons.forEach((button) => {
  button.addEventListener("click", searchButton);
});

inputText.addEventListener("keyup", searchText);
buttonNumber.addEventListener("click", searchNumber);
