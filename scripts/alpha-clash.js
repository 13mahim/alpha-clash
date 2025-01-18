// function play(){
//     // step-1
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the play ground
//      const playgroundSection = document.getElementById("play-ground");
//      playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
   
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log("player pressed", playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check match or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // update score:
        // current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // increase score
        const newScore = currentScore + 1;

        // show the new score
        currentScoreElement.innerText = newScore;
        
        // start a new game

        removedBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        // step- 1
         const currentLifeElement = document.getElementById('current-life');
         const currentLifeText = currentLifeElement.innerText;
         const currentLife = parseInt(currentLifeText);

        //  step-2
        const newLife = currentLife - 1;

        // step-3
        currentLifeElement.innerText = newLife;
    }
}
//  capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // step-1 generate a random alphabet
     const alphabet = getARandomAlphabet();
    //  console.log("your random alphabet is", alphabet);

    //  set random alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
 }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}