var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Calculator from "./classes/Calculator.js";
import Util from "./classes/Util.js";
function main() {
    // user
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
    const table = document.getElementById('myTable');
    function getOperations() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost/operacoes/back-end/public/operacoes');
            const data = yield response.json();
            Util.refreshHtmlTh(table);
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
                // dados
                const itemDate = document.createElement('td');
                itemDate.innerText = `${item.data}`;
                table.appendChild(tableRow);
                tableRow.appendChild(itemId);
                tableRow.appendChild(itemOp);
                tableRow.appendChild(itemResult);
                tableRow.appendChild(itemDate);
            });
            // filter
            const filterInput = document.getElementById('filter-input');
            const filterOptions = document.getElementById('filter-options');
            filterInput.addEventListener('keyup', (e) => {
                if (filterOptions.value === 'front') {
                    atualizarOperations(e.target.value);
                }
                else {
                    // back
                }
            });
            function atualizarOperations(typedText) {
                let filterOperations = data.filter(operation => {
                    var _a;
                    return (_a = operation.nome) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(typedText.toLowerCase());
                });
                table.innerHTML = '';
                Util.refreshHtmlTh(table);
                filterOperations.forEach(item => {
                    Util.refreshHtml(table, item);
                });
            }
        });
    }
    getOperations();
}
main();
