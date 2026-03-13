document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let num = 
  document.getElementById("number").value;
  
//   let result=""
//   for(let i=1;i<=num;i++){
//     if(i/2==0)
//   }

    let reversed = num.split("").reverse().join("");

    document.getElementById("result").innerHTML =
        `Reversed Even Number = <span>${reversed}</span>`;
});