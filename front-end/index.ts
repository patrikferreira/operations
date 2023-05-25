type Op = {
    nome: string|null,
    operacao: string|null,
    resultado: number|null,
}

let op = 0;
let valString: string = "0";

const output: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
const valBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.val');
const opBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.op');
const clearBtn: HTMLButtonElement = document.getElementById('clear') as HTMLButtonElement;
const deleteBtn: HTMLButtonElement = document.getElementById('delete') as HTMLButtonElement;
const equationBtn: HTMLButtonElement = document.getElementById('equation') as HTMLButtonElement;
const table: HTMLTableElement = document.getElementById('myTable') as HTMLTableElement;

valBtn.forEach((val) => {
    val.addEventListener('click', () => {
        output.value += val.value;
        valString = output.value.toString();
        let obj: Op = {nome: null, operacao: valString, resultado: null}
    })
});

opBtn.forEach((val) => {
    val.addEventListener('click', () => {
        if(output.value !== "") {
            output.value += val.value;
            valString = output.value.toString();
            let obj: Op = {nome: null, operacao: valString, resultado: null}
        } else {
            return;
        }
    })
})

equationBtn.addEventListener('click', () => {
    if(output.value === "") return;
    output.value = eval(output.value.replace("%", "/100"));
    let obj: Op = {nome: `teste`, operacao: valString, resultado: Number(output.value)}
    console.log(obj);

    fetch('http://localhost/operacoes/back-end/public/operacoes', {method: 'POST', body: JSON.stringify(obj)}).then(response => response.json()).then((data) => {
        console.log(data)
    }).then(() => {
        table.innerHTML = '';
        getOperations()
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

    const tableRow = document.createElement('tr');
    tableRow.classList.add('row');
    const thNome = document.createElement('th');
    thNome.innerText = `Nome`;
    const thOperacao = document.createElement('th');
    thOperacao.innerText = `Operação`;
    const thResultado = document.createElement('th');
    thResultado.innerText = `Resultado`
    const thData = document.createElement('th');
    thData.innerText = `Data`

    table.appendChild(tableRow);
    tableRow.appendChild(thNome);
    tableRow.appendChild(thOperacao);
    tableRow.appendChild(thResultado);
    tableRow.appendChild(thData);

    data.forEach(item => {
        const tableRow = document.createElement('tr');
        // nome
        const itemId = document.createElement('td');
        itemId.innerText = `${item.nome}`;

        // operação
        const itemOp = document.createElement('td');
        itemOp.innerText = `${item.operacao}`

        // resultado
        const itemResult = document.createElement('td');
        itemResult.innerText = `${item.resultado}`

        // data
        const itemDate = document.createElement('td');
        itemDate.innerText = `${item.data}`

        table.appendChild(tableRow);
        tableRow.appendChild(itemId);
        tableRow.appendChild(itemOp);
        tableRow.appendChild(itemResult);
        tableRow.appendChild(itemDate); 
    })
}

getOperations()



