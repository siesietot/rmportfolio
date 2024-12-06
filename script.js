const messages = ["I'm an IT Student", "I'm a Web Developer"];
let i = 0;
let j = 0;
let currentMessage = "";
let isAdding = true;
const delay = 150;

function type() {
    const animatedMessage = document.getElementById("animated-message");

    if (isAdding) {
        currentMessage += messages[i][j++];
        animatedMessage.textContent = currentMessage;

        if (j === messages[i].length) {
            isAdding = false;
            setTimeout(type, 2000);
            return;
        }
    } else {
        currentMessage = currentMessage.slice(0, --j);
        animatedMessage.textContent = currentMessage;

        if (j === 0) {
            isAdding = true;
            i = (i + 1) % messages.length;
        }
    }
    setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", type);
