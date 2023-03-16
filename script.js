const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
//HATİCE
// Disable/Enable Button

// VoiceRSS Speech Function

  /* VoiceRSS Speech Parameters
  function test(){ 
  VoiceRSS.speech({
    key: 'c7be60ce5cf54115914d67a440eec578',
    src: jokeString,
    hl: 'en-us',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

test();*/

//Passing Joke to VoiceRSS
function tellMe(joke) {
    console.log("tell me:",joke)
}


//Get Jokes From Joke API
async function getJokes() {
    let joke='';
    const apiUrl="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    try{
        const response= await fetch(apiUrl);
        const data= await response.json();
if(data.setup) {
    joke=`${data.setup} ... ${data.delivery}`;
} 
else {
    joke=data.joke;
} 
console.log(joke);
  }

    catch(error) {
        console.log("whoops");
    }
}

getJokes();