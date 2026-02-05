document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let age=document.getElementById("age").value;

    let result=document.getElementById("result");

    if(age>=60){
        result.innerHTML=`<h1>you are senior Citizen</h1>`;
    }else if(age>=30){
        result.innerHTML =`<h1>you are adult</h1>`;
    }else if(age>=18){
        result.innerHTML=`<h1>you are yound adult</h1>`;
    }else{
        result.innerHTML=`<h1> you are child</h1>`;
    }
})