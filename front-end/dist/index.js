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
let id = 0;
let op = 0;
let valString = "0";
let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1;
let ano = dataAtual.getFullYear();
let dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
console.log(dataFormatada);
const output = document.getElementById('display');
const valBtn = document.querySelectorAll('.val');
const opBtn = document.querySelectorAll('.op');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equationBtn = document.getElementById('equation');
valBtn.forEach((val) => {
    val.addEventListener('click', () => {
        output.value += val.value;
        valString = output.value.toString();
        let obj = { id: null, nome: null, operacao: valString, resultado: null, data: dataFormatada };
        console.log(obj);
    });
});
opBtn.forEach((val) => {
    val.addEventListener('click', () => {
        if (output.value !== "") {
            output.value += val.value;
            valString = output.value.toString();
            let obj = { id: null, nome: null, operacao: valString, resultado: null, data: dataFormatada };
            console.log(obj);
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
    let obj = { id: ++id, nome: `teste`, operacao: valString, resultado: Number(output.value), data: dataFormatada };
    console.log(obj);
    fetch('http://localhost/operacoes/back-end/public/operacoes', { method: 'POST', body: JSON.stringify(obj) }).then(response => response.json()).then((data) => {
        console.log(data);
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
        data.forEach(item => {
            console.log(item);
        });
    });
}
getOperations();
