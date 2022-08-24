const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const body = document.body
const addToDisplay = (e) => (display.innerText += e.innerText);
const clearAll = () => (display.innerText = "");
window.addEventListener("load", () => {
  if (body.style.fontFamily !== "Poppins") return console.clear();
})
window.addEventListener('keydown', (e) => {
  if (Number(e.key) || e.key.includes("+") || e.key.includes("-") || e.key.includes(".")) {
    display.innerText += e.key
  }
  else if (e.key.includes("/")) {
    display.innerText += "÷"
  }
  else if (e.key.includes("%")) {
    display.innerText += "%"
  }
  else if (e.key.includes("0")) return display.innerText += "0"
  else if (e.key.includes("*")) {
    display.innerText += "×"
  }
  else if (e.key == "Enter") {
    computer()
  }
  else if (e.key == "Backspace") {
    display.innerText = display.innerText.toString().slice(0, -1)
  }
  else if (e.key == "Delete") {
    display.innerText = ""
  }
});
clear.addEventListener("click", () => (display.innerText = display.innerText.toString().slice(0, -1)));
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
