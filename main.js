const adviceNumber = document.getElementById("advice-number");
const advice = document.getElementById("advice");
const button = document.getElementById("my-button");
const url = "https://api.adviceslip.com/advice";
let num = 1;


async function getData(){
    try{
   let response = await fetch(url);
   if(response.ok){
    const data = await response.json();
    let randomAdvice = data.slip.advice;
    adviceNumber.innerHTML = `Advice # ${num}`;
    advice.innerHTML = randomAdvice;
    num++;
   }else{
    throw new Error("No network connection")
   }
   }catch(Error){
    console.log("ERROR:" + Error);
   }
}


getData();
button.addEventListener("click",getData);