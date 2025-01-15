// function play(){
//     // step-1
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the play ground
//      const playgroundSection = document.getElementById("play-ground");
//      playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
   
// }

function continueGame(){
     const alphabet = getARandomAlphabet();
     console.log("your random alphabet is", alphabet);
 }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}