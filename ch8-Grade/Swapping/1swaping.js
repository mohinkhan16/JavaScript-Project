
function swapNumbers() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {
        document.getElementById("result").innerHTML = "Please enter both numbers";
        return;
    }


    let temp = a;
    a = b;
    b = temp;

    document.getElementById("result").innerHTML =
        "After Swapping:<br>First Number = " + a + "<br>Second Number = " + b;
}
