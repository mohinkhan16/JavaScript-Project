document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let n=Number(document.getElementById("number").value);
    let result=document.getElementById("result");

    result.innerHTML="";

    for(let i=n;i>=1;i--){
        if(i%2===0){
            result.innerHTML+=i+",";
        }
    }
});