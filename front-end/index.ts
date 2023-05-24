type Op = {
    id: number,
    nome: string,
    operacao: string,
    resultado: number,
    data: string,
}

let id = 0;
let op = 0;
let valString: string = "0";
let dataAtual: Date = new Date();
let dia: number = dataAtual.getDate();
let mes: number = dataAtual.getMonth() + 1;
let ano: number = dataAtual.getFullYear();

let dataFormatada: string = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;

console.log(dataFormatada);

const output: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
const valBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.val');
const opBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.op');
const clearBtn: HTMLButtonElement = document.getElementById('clear') as HTMLButtonElement;
const deleteBtn: HTMLButtonElement = document.getElementById('delete') as HTMLButtonElement;
const equationBtn: HTMLButtonElement = document.getElementById('equation') as HTMLButtonElement;

valBtn.forEach((val) => {
    val.addEventListener('click', () => {
        output.value += val.value;
        valString = output.value.toString();
        let obj: Op = {id: null, nome: null, operacao: valString, resultado: null, data: dataFormatada}
        console.log(obj)
    })
});

opBtn.forEach((val) => {
    val.addEventListener('click', () => {
        if(output.value !== "") {
            output.value += val.value;
            valString = output.value.toString();
            let obj: Op = {id: null, nome: null, operacao: valString, resultado: null, data: dataFormatada}
            console.log(obj)
        } else {
            return;
        }
    })
})

equationBtn.addEventListener('click', () => {
    if(output.value === "") return;
    output.value = eval(output.value.replace("%", "/100"));
    let obj: Op = {id: ++id, nome: `teste`, operacao: valString, resultado: Number(output.value), data: dataFormatada}
    console.log(obj);

    fetch('http://localhost/operacoes/back-end/public/operacoes', {method: 'POST', body: JSON.stringify(obj)}).then(response => response.json()).then((data) => {
        console.log(data)
    })
})

clearBtn.addEventListener('click', () => {
    output.value = "";
})

deleteBtn.addEventListener('click', () => {
    output.value = output.value.slice(0, -1);
})

async function getOperations() {
    const response = await fetch('http://localhost/operacoes/back-end/public/operacoes');
    const data: Array<Op> = await response.json();
    data.forEach(item => {
        console.log(item)
    })
}

getOperations()
