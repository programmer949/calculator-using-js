const body = document.body;
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let container = "";

const clear = () => {
    display.innerText = "";
    container = "";
};

const slice = () => {
    display.innerText = display.innerText.slice(0, -1);
    container = container.slice(0, -1);
};

for (let i = 0; i < buttons.length; i++) {
    body.onkeydown = (e) => {
        if (e.key === "Delete") {
            clear();
        } else if (e.key === "Backspace") {
            slice();
        } else if (container && e.key === "Enter") {
            try {
                display.innerText = eval(container);
            } catch {
                display.innerText = "Error";
                setTimeout(() => clear(), 500);
            }
        } else if (
            Number(e.key) ||
            e.key === "0" ||
            e.key === "+" ||
            e.key === "-" ||
            e.key === "*" ||
            e.key === "/" ||
            e.key === "." ||
            e.key === "%"
        ) {
            if (buttons[i].innerText === "•") {
                display.innerText += ".";
                container += e.key;
            } else {
                if (e.key === "*") {
                    display.innerText += "×";
                    container += e.key;
                } else if (e.key === "/") {
                    display.innerText += "÷";
                    container += e.key;
                } else {
                    display.innerText += e.key;
                    container += e.key;
                }
            }
        }
    };
    buttons[i].onclick = (e) => {
        if (e.target.innerText === "AC") {
            clear();
        } else if (e.target.innerText === "C") {
            slice();
        } else {
            let data = e.target.attributes.data.nodeValue;
            if (container && data === "=") {
                try {
                    display.innerText = eval(container);
                } catch {
                    display.innerText = "Error";
                    setTimeout(() => clear(), 500);
                }
            } else if (
                Number(data) ||
                data === "0" ||
                data === "+" ||
                data === "-" ||
                data === "*" ||
                data === "/" ||
                data === "." ||
                data === "%"
            ) {
                if (e.target.innerText === "•") {
                    display.innerText += ".";
                    container += data;
                } else {
                    display.innerText += e.target.innerText;
                    container += data;
                }
            }
        }
    };
}
