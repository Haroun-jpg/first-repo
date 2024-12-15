

const products = document.querySelectorAll(".card");
const totalPriceElement = document.querySelector(".total");


function updateTotalPrice() {
  let totalPrice = 0;
  products.forEach((product) => {
    const unitPrice = parseFloat(product.querySelector(".unit-price").textContent.replace("$", ""));
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    totalPrice += unitPrice * quantity;
  });
  totalPriceElement.textContent = `${totalPrice} $`;
}

products.forEach((product) => {
  const plusButton = product.querySelector(".fa-plus-circle");
  const minusButton = product.querySelector(".fa-minus-circle");
  const deleteButton = product.querySelector(".fa-trash-alt");
  const likeButton = product.querySelector(".fa-heart");
  const quantityElement = product.querySelector(".quantity");


  plusButton.addEventListener("click", () => {
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    updateTotalPrice();
  });

  minusButton.addEventListener("click", () => {
    if (parseInt(quantityElement.textContent) > 0) {
      quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
      updateTotalPrice();
    }
  });

  deleteButton.addEventListener("click", () => {
    product.remove();
    updateTotalPrice();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
    if (likeButton.classList.contains("liked")) {
      likeButton.style.color = "red";
    } else {
      likeButton.style.color = ""; 
    }
  });
});


updateTotalPrice();
