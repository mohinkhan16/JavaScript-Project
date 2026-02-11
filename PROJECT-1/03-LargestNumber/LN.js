document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let firstnumber = Number(document.getElementById("firstnumber").value);
    let secoundnumber = Number(document.getElementById("secoundnumber").value);
    let thirdnumber = Number(document.getElementById("thirdnumber").value);

    let result = document.getElementById("result");

    if(firstnumber >= secoundnumber && firstnumber >= thirdnumber){
        result.innerHTML = firstnumber + " is the Largest Number";
    }
    else if(secoundnumber >= firstnumber && secoundnumber >= thirdnumber){
        result.innerHTML = secoundnumber + " is the Largest Number";
    }
    else{
        result.innerHTML = thirdnumber + " is the Largest Number";
    }
});
