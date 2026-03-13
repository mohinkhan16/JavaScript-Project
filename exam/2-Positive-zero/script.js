document.getElementById("form").addEventListener
("submit", function (e) {
    e.preventDefault();

    let number =  Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    if (number > 0) {
        result.textContent = "The number is Positive";
    } else if (number < 0) {
        result.textContent = "The number is Negative";
    } else {
        result.textContent = "The number is Zero";
    }
});