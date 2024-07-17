const generateBtn = document.getElementById("generate-btn");
const numberElement = document.getElementById("random-number");
const numberContainer = document.querySelector(".number-container");
// const styleNumberContainer= window.getComputedStyle(numberContainer);
// const animationIteration = styleNumberContainer.getPropertyValue("animation-iteration-count")

generateBtn.addEventListener("click", () => {
    
    const randomNum = Math.floor(Math.random() * 100) + 1;

    numberElement.textContent = randomNum;

    numberContainer.style.animation = 'none';
    void numberContainer.offsetWidth; // Force le reflow
    numberContainer.style.animation = 'fadeIn 0.75s ease-in-out forwards';
});