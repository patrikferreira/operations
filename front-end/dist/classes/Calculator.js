export default class Calculator {
    constructor(user) {
        this.display = document.getElementById('display');
        this.valBtn = document.querySelectorAll('.val');
        this.opBtn = document.querySelectorAll('.op');
        this.clearBtn = document.getElementById('clear');
        this.deleteBtn = document.getElementById('delete');
        this.equationBtn = document.getElementById('equation');
        this.user = user;
        this.valBtn.forEach((val) => {
            val.addEventListener('click', () => {
                this.display.innerText += val.value;
            });
        });
        this.opBtn.forEach((val) => {
            val.addEventListener('click', () => {
                if (this.display.innerText !== "") {
                    this.display.innerText += val.value;
                }
                else {
                    return;
                }
            });
        });
        this.equationBtn.addEventListener('click', () => {
            if (this.display.innerText === "")
                return;
            this.display.innerText = eval(this.display.innerText.replace("%", "/100"));
        });
        this.clearBtn.addEventListener('click', () => {
            this.display.innerText = "";
        });
        this.deleteBtn.addEventListener('click', () => {
            this.display.innerText = this.display.innerText.slice(0, -1);
        });
    }
}
