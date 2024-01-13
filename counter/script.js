const increaseBtn=document.querySelector("#increaseBtn");
const decreaseBtn=document.querySelector("#decreaseBtn");
const Result=document.querySelector("#resultValue");
var count=0;

increaseBtn.addEventListener("click",()=>{
    let inputValue=document.querySelector("#inputValue");
    let value=inputValue.value;
    count+=Number(value);
    Result.innerHTML=count
});

decreaseBtn.addEventListener("click",()=>{
    let inputValue=document.querySelector("#inputValue");
    let value=inputValue.value;
    count-=Number(value);
    Result.innerHTML=count
});

