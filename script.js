const quoteText = document.querySelector(".quote"),
authorName=document.querySelector(".author .name"),
quoteBtn=document.querySelector("button"),
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".copy"),
twitterBtn=document.querySelector(".twitter");


//random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Quote...";
    //featching random quote/data from API and parsing it into Javascript object
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading");
    });
}   

soundBtn.addEventListener("click",()=>{
    //speachsynthesis is a web speech api that represents a speech request
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speak method  of speechsynthesis speaks the utterance
});

copyBtn.addEventListener("click",()=>{
    //copy the quote on copyBtn click
    //writeText() property writes the specific text string to system clipboard 
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click",()=>{
   let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
   window.open(tweetUrl, "_blank");//open new twitter tab
});

quoteBtn.addEventListener("click", randomQuote);