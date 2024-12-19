const inventory = {
  apple: { price: 120, qty: 0 },
  cherry: { price: 150, qty: 0 },
  strawberry: { price: 180, qty: 0 },
};

function sum() {
  let total = 0;
  const keys = Object.keys(inventory);
  keys.forEach((k) => {
    total += inventory[k].price * inventory[k].qty;
  });
  return total;
}

function calculateSum(box) {
  let qty = 0;
  if (box.value.length > 0) {
    qty = parseInt(box.value);
  }
  inventory[box.id].qty = qty;
  return `${sum()} INR`;
}

window.addEventListener("DOMContentLoaded", () => {
  const totalContainer = document.getElementById("total-container");
  const inputBoxes = document.querySelectorAll("#calculator input");

  inputBoxes.forEach((box) => {
    box.addEventListener("keyup", () => {
      console.log(box.id + "- changed " + box.value + " - Changed");
      totalContainer.textContent = calculateSum(box);
    });
  });
});
