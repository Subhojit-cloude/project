const startBtn=document.querySelector("#start");
const stopBtn=document.querySelector("#stop");
const speakBtn=document.querySelector("#speak");



const SpeechRecognition=
window.SpeechRecognition||window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();
//for start
recognition.onstart=function(){
    console.log(" active");
};

// for result
recognition.onresult=function(event){
   
    let current=event.resultIndex;
    let transcript=event.results[current][0].transcript;
    transcript=transcript.toLowerCase();
    console.log(`my words : ${transcript}`);
    

    if(transcript.includes("activate jarvis")){
        readOut("activated sir");
    }
    if(transcript.includes( "you are fine")){
        readOut("i am fine what about you sir");
    }    

    if(transcript.includes("hello, jarvis")){
        readOut("hello sir how may can i help you");
    }
    if(transcript.includes("open youtube")||transcript.includes("opening youtube")){
        readOut("opening youtube sir");
        window.open("https://www.youtube.com/");
    }
    if(transcript.includes("open google")||transcript.includes("opening google")){
        readOut("opening google sir");
        window.open("https://www.google.co.in/");
    }
    if(transcript.includes("please search")){
        readOut("here's the result");
        let input=transcript.split("");
        input.splice(0,14);
        input.pop();
        input=input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.co.in/search?q=${input}`);
    }
   

    };
//for end
recognition.onend=function(){
    console.log(" deactive");
};



//for it continuous
//recognition.continuous=true;

startBtn.addEventListener("click",()=>{
    recognition.start();

});
stopBtn.addEventListener("click",()=>{
    recognition.stop();

});

// for jarvis voice
function readOut(message){
    const speech= new SpeechSynthesisUtterance();
// voice change
//const allVoices=speechSynthesis.getVoices();
    speech.text=message;
   // speech.voice=allVoices[36];
    speech.volume=1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}
speakBtn.addEventListener("click",()=>{
    readOut("hi sir ");
});

