"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let op = 0;
let valString = "0";
const output = document.getElementById('display');
const valBtn = document.querySelectorAll('.val');
const opBtn = document.querySelectorAll('.op');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equationBtn = document.getElementById('equation');
const table = document.getElementById('myTable');
valBtn.forEach((val) => {
    val.addEventListener('click', () => {
        output.value += val.value;
        valString = output.value.toString();
        let obj = { nome: null, operacao: valString, resultado: null };
    });
});
opBtn.forEach((val) => {
    val.addEventListener('click', () => {
        if (output.value !== "") {
            output.value += val.value;
            valString = output.value.toString();
            let obj = { nome: null, operacao: valString, resultado: null };
        }
        else {
            return;
        }
    });
});
equationBtn.addEventListener('click', () => {
    if (output.value === "")
        return;
    output.value = eval(output.value.replace("%", "/100"));
    let obj = { nome: `teste`, operacao: valString, resultado: Number(output.value) };
    console.log(obj);
    fetch('http://localhost/operacoes/back-end/public/operacoes', { method: 'POST', body: JSON.stringify(obj) }).then(response => response.json()).then((data) => {
        console.log(data);
    }).then(() => {
        table.innerHTML = '';
        getOperations();
    });
});
clearBtn.addEventListener('click', () => {
    output.value = "";
});
deleteBtn.addEventListener('click', () => {
    output.value = output.value.slice(0, -1);
});
function getOperations() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost/operacoes/back-end/public/operacoes');
        const data = yield response.json();
        const tableRow = document.createElement('tr');
        tableRow.classList.add('row');
        const thNome = document.createElement('th');
        thNome.innerText = `Nome`;
        const thOperacao = document.createElement('th');
        thOperacao.innerText = `Operação`;
        const thResultado = document.createElement('th');
        thResultado.innerText = `Resultado`;
        const thData = document.createElement('th');
        thData.innerText = `Data`;
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
            itemOp.innerText = `${item.operacao}`;
            // resultado
            const itemResult = document.createElement('td');
            itemResult.innerText = `${item.resultado}`;
            // data
            const itemDate = document.createElement('td');
            itemDate.innerText = `${item.data}`;
            table.appendChild(tableRow);
            tableRow.appendChild(itemId);
            tableRow.appendChild(itemOp);
            tableRow.appendChild(itemResult);
            tableRow.appendChild(itemDate);
        });
    });
}
getOperations();
