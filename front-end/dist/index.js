import Calculator from "./classes/Calculator.js";
function main() {
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('send-user');
    const userDiv = document.getElementById('user');
    const divBlock = document.getElementById('block');
    sendBtn.addEventListener('click', () => {
        if (userInput.value !== '') {
            const nameUser = userInput.value;
            userDiv.innerText = `${nameUser.charAt(0).toUpperCase() + nameUser.slice(1)}`;
            userInput.value = '';
            divBlock.classList.add('unlock');
            // calculadora
            const calculator = new Calculator(nameUser);
        }
    });
}
main();
// let calcIsActive = false;
// const btnName: HTMLButtonElement = document.getElementById('btnName') as HTMLButtonElement;
// const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
// let nameUser: string = '';
// btnName.addEventListener('click', () => {
//     nameUser = nameInput.value;
//     if(nameUser !== '') {
//         calcIsActive = true;
//         main()
//     }
// })
// function main() {
//     type Op = {
//         nome: string|null,
//         operacao: string|null,
//         resultado: number|null,
//     }
//     let op = 0;
//     let valString: string = "0";
//     const output: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
//     const valBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.val');
//     const opBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.op');
//     const clearBtn: HTMLButtonElement = document.getElementById('clear') as HTMLButtonElement;
//     const deleteBtn: HTMLButtonElement = document.getElementById('delete') as HTMLButtonElement;
//     const equationBtn: HTMLButtonElement = document.getElementById('equation') as HTMLButtonElement;
//     const table: HTMLTableElement = document.getElementById('myTable') as HTMLTableElement;
//     const filterOp: HTMLInputElement = document.getElementById('filter-input') as HTMLInputElement;
//     if(!calcIsActive) {
//         return
//     }
//     valBtn.forEach((val) => {
//         val.addEventListener('click', () => {
//             output.innerText += val.value;
//             valString = output.innerText.toString();
//             let obj: Op = {nome: nameUser, operacao: valString, resultado: null}
//         })
//     });
//     opBtn.forEach((val) => {
//         val.addEventListener('click', () => {
//             if(output.innerText !== "") {
//                 output.innerText += val.value;
//                 valString = output.innerText.toString();
//                 let obj: Op = {nome: nameUser, operacao: valString, resultado: null}
//             } else {
//                 return;
//             }
//         })
//     })
//     equationBtn.addEventListener('click', () => {
//         if(output.innerText === "") return;
//         output.innerText = eval(output.innerText.replace("%", "/100"));
//         let obj: Op = {nome: nameUser, operacao: valString, resultado: Number(output.innerText)}
//         console.log(obj);
//         fetch('http://localhost/operacoes/back-end/public/operacoes', {method: 'POST', body: JSON.stringify(obj)}).then(response => response.json()).then((data) => {
//             console.log(data)
//         }).then(() => {
//             table.innerHTML = '';
//             getOperations()
//         })
//     })
//     clearBtn.addEventListener('click', () => {
//         Util.clearHtml(output)
//     })
//     deleteBtn.addEventListener('click', () => {
//         output.innerText = output.innerText.slice(0, -1);
//     })
//     async function getOperations() {
//         const response = await fetch('http://localhost/operacoes/back-end/public/operacoes');
//         const data: Array<Op> = await response.json();
//         const tableRow = document.createElement('tr');
//         tableRow.classList.add('row');
//         const thNome = document.createElement('th');
//         thNome.innerText = `Nome`;
//         const thOperacao = document.createElement('th');
//         thOperacao.innerText = `Operação`;
//         const thResultado = document.createElement('th');
//         thResultado.innerText = `Resultado`
//         const thData = document.createElement('th');
//         thData.innerText = `Data`
//         table.appendChild(tableRow);
//         tableRow.appendChild(thNome);
//         tableRow.appendChild(thOperacao);
//         tableRow.appendChild(thResultado);
//         tableRow.appendChild(thData);
//         data.forEach(item => {
//             const tableRow = document.createElement('tr');
//             // nome
//             const itemId = document.createElement('td');
//             itemId.innerText = `${item.nome}`;
//             // operação
//             const itemOp = document.createElement('td');
//             itemOp.innerText = `${item.operacao}`
//             // resultado
//             const itemResult = document.createElement('td');
//             itemResult.innerText = `${item.resultado}`
//             // data
//             const itemDate = document.createElement('td');
//             itemDate.innerText = `${item.data}`
//             table.appendChild(tableRow);
//             tableRow.appendChild(itemId);
//             tableRow.appendChild(itemOp);
//             tableRow.appendChild(itemResult);
//             tableRow.appendChild(itemDate); 
//         })
//     }
//     getOperations()
//     filterOp.addEventListener('keyup', (e: Event) => {
//         atualizarOp((e.target as HTMLInputElement).value)
//     })
//     async function atualizarOp(text: string) {
//         const response = await fetch('http://localhost/operacoes/back-end/public/operacoes');
//         const data: Array<Op> = await response.json();
//         table.innerHTML = '';
//         let opFiltrados = data.filter(op => {
//             return op.nome?.includes(text)
//         })
//         console.log(opFiltrados)
//     }
// }
// main()
