document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const number = Number(document.getElementById("number").value);
    const result = document.getElementById("result");

    if (number > 0) {
        result.textContent = "The number is Positive";
        result.style.color = "lightgreen";
    } else if (number < 0) {
        result.textContent = "The number is Negative";
        result.style.color = "red";
    } else {
        result.textContent = "The number is Zero";
        result.style.color = "yellow";
    }
});
