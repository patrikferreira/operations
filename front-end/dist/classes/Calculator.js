import Util from "./Util.js";
export default class Calculator {
    constructor(user) {
        this.display = document.getElementById('display');
        this.valBtn = document.querySelectorAll('.val');
        this.opBtn = document.querySelectorAll('.op');
        this.clearBtn = document.getElementById('clear');
        this.deleteBtn = document.getElementById('delete');
        this.equationBtn = document.getElementById('equation');
        this.user = user;
        let valString = "0";
        this.valBtn.forEach((val) => {
            val.addEventListener('click', () => {
                this.display.innerText += val.value;
                valString = this.display.innerText.toString();
                let obj = { nome: user, operacao: valString, resultado: null };
            });
        });
        this.opBtn.forEach((val) => {
            val.addEventListener('click', () => {
                if (this.display.innerText !== "") {
                    this.display.innerText += val.value;
                    valString = this.display.innerText.toString();
                    let obj = { nome: user, operacao: valString, resultado: null };
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
            let obj = { nome: user, operacao: valString, resultado: Number(this.display.innerText) };
            fetch('http://localhost/operacoes/back-end/public/operacoes', { method: 'POST', body: JSON.stringify(obj) }).then(response => response.json()).then((data) => {
                console.log(data);
            }).then(() => {
            });
        });
        this.clearBtn.addEventListener('click', () => {
            // this.display.innerText = "";
            Util.clearHtml(this.display);
        });
        this.deleteBtn.addEventListener('click', () => {
            this.display.innerText = this.display.innerText.slice(0, -1);
        });
    }
}
