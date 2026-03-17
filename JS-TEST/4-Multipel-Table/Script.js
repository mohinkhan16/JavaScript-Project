document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let num=Number(document.getElementById("number").value);
    let result=document.getElementById("result");

    result.innerHTML="";

    for(let i=1;i<=10;i++){
  result.innerHTML += num + "*" + i + "=" + (num*i) +"<br>"
    }
});