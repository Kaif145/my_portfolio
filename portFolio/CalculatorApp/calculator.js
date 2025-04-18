let elements = document.querySelectorAll(".box");
let inputBox = document.querySelector(".InputBox");
let shouldReset = false; // Flag to reset input after showing result

let calculatorFunction = (myNums) => {
  try {
    if (myNums === "=") {
      if (inputBox.value.trim() === "") throw new Error("Empty Input");

      inputBox.value = Function(`'use strict'; return (${inputBox.value})`)();
      shouldReset = true;

    } else if (myNums === "C") {
      inputBox.value = "";
      shouldReset = false;

    } else {
      let symbolMap =  { "÷": "/", "×": "*", "−": "-" };
      myNums = symbolMap[myNums] || myNums;

      if (shouldReset) {
        inputBox.value = "";
        shouldReset = false;
      }
      inputBox.value += myNums;
    }
  } catch (error) {
    inputBox.value = "Error";
    console.error(error.message);
    shouldReset = true;
  }
};

elements.forEach((nums) => {
  nums.addEventListener("click", () => {
    const myNums = nums.innerText;
    console.log(myNums);
    calculatorFunction(myNums);
  });
});


