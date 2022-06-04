const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const addToDisplay = (e) => (display.innerText += e.innerText);
const clearAll = () => (display.innerText = "");
clear.addEventListener(
  "click",
  () => (display.innerText = display.innerText.toString().slice(0, -1))
);
const computer = () => {
  try {
    if (display.innerText) {
      if (display.innerText.includes("÷")) {
        display.innerText = display.innerText.toString().replace("÷", "/");
        display.innerText = eval(display.innerText);
      } else if (display.innerText.includes("×")) {
        display.innerText = display.innerText.toString().replace("×", "*");
        display.innerText = eval(display.innerText);
      } else {
        display.innerText = eval(display.innerText);
      }
    }
  } catch {
    display.innerText = "Error";
    setTimeout(() => {
      display.innerText = "";
    }, 500);
  }
};
