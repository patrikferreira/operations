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
        

        this.valBtn.forEach((val) => {
            val.addEventListener('click', () => {
                this.display.innerText += val.value;
            })
        });

        this.opBtn.forEach((val) => {
            val.addEventListener('click', () => {
                if(this.display.innerText !== "") {
                    this.display.innerText += val.value;
                } else {
                    return;
                }
            })
        })

        this.equationBtn.addEventListener('click', () => {
            if(this.display.innerText === "") return;
            this.display.innerText = eval(this.display.innerText.replace("%", "/100"));
        })

        this.clearBtn.addEventListener('click', () => {
            this.display.innerText = "";
        })

        this.deleteBtn.addEventListener('click', () => {
            this.display.innerText = this.display.innerText.slice(0, -1);
        })
        
    }

}