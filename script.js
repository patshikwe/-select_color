const container = document.getElementById("container");
const btns = document.getElementsByClassName('btn');
const paragraph = document.createElement("p");
container.appendChild(paragraph);

for (const btn of btns) {
    btn.addEventListener('click', function () {
        const buttonColor = getComputedStyle(this);
        const buttunBackgroundColor = buttonColor["backgroundColor"];
        document.body.style.backgroundColor = buttunBackgroundColor;
        const btnNumber = btn.innerHTML;
        paragraph.innerHTML = `This is button number ${btnNumber}`;
        paragraph.style.textAlign = 'center';
        paragraph.style.fontSize = "20px";
        paragraph.style.marginTop = "10px";

        if (btnNumber === '1' || btnNumber === '2' || btnNumber === '3') {
            paragraph.style.color = "white";
        }

        if (btnNumber === '4' || btnNumber === '5' || btnNumber === '6') {
            paragraph.style.color = "black";
        }
    })
}