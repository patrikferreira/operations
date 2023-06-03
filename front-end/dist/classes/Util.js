export default class Util {
    constructor() { }
    static clearHtml(container) {
        container.innerHTML = '';
    }
    static refreshHtml(table, item) {
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
    }
    static refreshHtmlTh(table) {
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
    }
}
