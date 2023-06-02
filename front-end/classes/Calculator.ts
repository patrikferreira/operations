import Util from "./Util.js";

export default class Calculator  {
    display: HTMLInputElement;
    valBtn: NodeListOf<HTMLButtonElement>;
    opBtn: NodeListOf<HTMLButtonElement>;
    clearBtn: HTMLButtonElement;
    deleteBtn: HTMLButtonElement;
    equationBtn: HTMLButtonElement;
    user: string;
    constructor(user: string) {
        this.display = document.getElementById('display') as HTMLInputElement;
        this.valBtn = document.querySelectorAll('.val') as NodeListOf<HTMLButtonElement>;
        this.opBtn = document.querySelectorAll('.op') as NodeListOf<HTMLButtonElement>;
        this.clearBtn = document.getElementById('clear') as HTMLButtonElement;
        this.deleteBtn = document.getElementById('delete') as HTMLButtonElement
        this.equationBtn = document.getElementById('equation') as HTMLButtonElement;
        this.user = user;

        type Op = {
            nome: string|null,
            operacao: string|null,
            resultado: number|null,
        }
        let valString: string = "0";
        

        this.valBtn.forEach((val) => {
            val.addEventListener('click', () => {
                this.display.innerText += val.value;
                valString = this.display.innerText.toString();
                let obj: Op = {nome: user, operacao: valString, resultado: null}
            })
        });

        this.opBtn.forEach((val) => {
            val.addEventListener('click', () => {
                if(this.display.innerText !== "") {
                    this.display.innerText += val.value;
                    valString = this.display.innerText.toString();
                    let obj: Op = {nome: user, operacao: valString, resultado: null}
                } else {
                    return;
                }
            })
        })

        this.equationBtn.addEventListener('click', () => {
            if(this.display.innerText === "") return;
            this.display.innerText = eval(this.display.innerText.replace("%", "/100"));
            let obj: Op = {nome: user, operacao: valString, resultado: Number(this.display.innerText)}
            fetch('http://localhost/operacoes/back-end/public/operacoes', {method: 'POST', body: JSON.stringify(obj)}).then(response => response.json()).then((data) => {
                console.log(data)
            }).then(() => {
                
            })
        })

        this.clearBtn.addEventListener('click', () => {
            // this.display.innerText = "";
            Util.clearHtml(this.display)
        })

        this.deleteBtn.addEventListener('click', () => {
            this.display.innerText = this.display.innerText.slice(0, -1);
        })
        
    }

}