document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let unit = Number(document.getElementById("unit").value);
  let output = document.getElementById("Bill");

  let Bill = 0;

  if (unit <= 100) {
    Bill = unit * 10;
  } 
  else if (unit <= 200) {
    Bill = 100 * 10 + (unit - 100) * 20;
  } 
  else if (unit <= 300) {
    Bill = 100 * 10 + 100 * 20 + (unit - 200) * 30;
  } 
  else {
    Bill = 100 * 10 + 100 * 20 + 100 * 30 + (unit - 300) * 40;
  }

  output.innerHTML = `<h2>Total Bill = ₹${Bill}</h2>`;
});