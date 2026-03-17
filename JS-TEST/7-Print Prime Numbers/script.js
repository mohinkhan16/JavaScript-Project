document.getElementById("form").addEventListener("submit",(e)=>{
e.preventDefault();

    let n = Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    result.innerHTML = "";

    for(let i = 2; i <= n; i++){
        let isPrime = true;

        for(let j = 2; j < i; j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            result.innerHTML += i + ", ";
        }
    }

});