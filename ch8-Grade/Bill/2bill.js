document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

let amout=Number(document.getElementById("amout").value);
let result=document.getElementById("result");

let discount=0;

if(amout>=5000){
    discount=amout*0.20;
}else if(amout>=2000){
    discount=amout*0.10;
}else{
    discount=amout*0.50;
}

let finalAmount=amout-discount;

result.innerHTML=`<h2>final Price=₹${finalAmount}</h2>`
})