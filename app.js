
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

swordSound = () => {
    sword.pause();
    sword.play();
}

bowSound = () => {
    bow.pause();
    bow.play();
}

arrowSound = () => {
    arrow.pause();
    arrow.play();
}

spellSound = () => {
    spell.pause();
    spell.play();
}

fireballSound = () => {
    fireball.pause();
    fireball.play();
}

button1.addEventListener("click", swordSound);

button2.addEventListener("click", bowSound);

button3.addEventListener("click", arrowSound);

button4.addEventListener("click", spellSound);

button5.addEventListener("click", fireballSound);

document.addEventListener("keypress", (keyboard) => {
    if (keyboard.key == "s") {
        swordSound();
    } else if (keyboard.key == "b") {
        bowSound();
    } else if (keyboard.key == "a") {
        arrowSound();
    } else if (keyboard.key == "c") {
        spellSound();
    } else if (keyboard.key == "f") {
        fireballSound();
  }
})  