//Getting the HTML elements from index.html
const inputNum = document.querySelector("#input-num");
const circleContainer = document.querySelector("#circle-cotainer");

// circleContainer.remove();

//function to make the cicrles.
const makeCircles = () => {
    if (inputNum.value < 1 || inputNum.value > 1000) {

    } else {
        for ( let i = 0; i < inputNum.value; i++) {
            console.log (i)
        }
    }
 }