let menuBtn=document.querySelector(".menu");    

let links=document.querySelector(".links"); 

let acordian=document.querySelectorAll(".acordian");


let check="plus";

    
    acordian.forEach(val1=>{
        val1.addEventListener("click",()=>{
     
           let plus= val1.querySelectorAll(".plus");
           plus.forEach(plas=>{

            if(check==="plus"){

            plas.innerHTML="-";
            check="minus";
         
          }
          else{
             plas.innerHTML="+"; 
             check="plus";
          }
           })
      
        })
})



acordian.forEach(val2=>{
    val2.addEventListener("click",()=>{
    let cor=val2.querySelector(".answer");
    cor.classList.toggle("answer-active")
    })






})











menuBtn.addEventListener("click",()=>{
    links.classList.toggle("links-active");


})


let animatedText=document.querySelector(".animated-text");

let animated=()=>{

setTimeout(() => {
    animatedText.innerHTML="Javascript";
}, 0);
setTimeout(() => {
    animatedText.innerHTML="Phython";
}, 4000);
setTimeout(() => {
    animatedText.innerHTML="Java";
}, 8000);

setTimeout(() => {
    animatedText.innerHTML="Html";
}, 12000);
setTimeout(() => {
    animatedText.innerHTML="Css";
}, 16000);
setTimeout(() => {
    animatedText.innerHTML="MySql";
}, 20000);
}
animated();

setInterval(animated,24000);

