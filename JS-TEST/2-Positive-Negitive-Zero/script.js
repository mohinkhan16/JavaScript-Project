document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let num = Number(document.getElementById("number").value);

  if (num > 0) {
    document.getElementById("result").innerHTML = "Number is Positive";
  } else if (num < 0) {
    document.getElementById("result").innerHTML = "Number is Negative";
  } else {
    document.getElementById("result").innerHTML = "Number is Zero";
  }
});