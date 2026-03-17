document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();


    let temp=Number(document.getElementById("number").value);
    let choice=document.getElementById("choice").value;
    let result=document.getElementById("result");


    if(choice==="CtoF"){
        let ans=(temp*9/5)+32;
        result.innerHTML="Fehrenit:"+ans;
    }
    else{
        let ans=(temp -32)*5/9;
        result.innerHTML="Clesius"+ans;
    }
});