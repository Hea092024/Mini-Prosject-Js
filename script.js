//Getting the HTML elements from index.html
const inputNum = document.querySelector("#input-num");
const circleContainer = document.querySelector("#circle-cotainer");

// circleContainer.remove();

//function to make the cicrles.
const makeCircles = () => {
    if (inputNum.value < 1 || inputNum.value > 1000) {

    } else {
        for ( let i = 0; i < inputNum.value; i++) {
            const circle = document.createElement("div")
            circle.classList.add("circle")
            circle.textContent = i + 1
            circle.style.backgroundColor = `#${math.floor(math.random() * 16777215).toString(16)}`
            circleContainer.append(circle)
        }
    }
 }