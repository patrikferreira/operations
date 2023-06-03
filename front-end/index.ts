import Calculator from "./classes/Calculator.js";
import Util from "./classes/Util.js";

function main() {
    // user
    const userInput: HTMLInputElement = document.getElementById('userInput') as HTMLInputElement;
    const sendBtn: HTMLButtonElement = document.getElementById('send-user') as HTMLButtonElement;
    const userDiv: HTMLDivElement = document.getElementById('user') as HTMLDivElement;
    const divBlock: HTMLDivElement = document.getElementById('block') as HTMLDivElement;

    sendBtn.addEventListener('click', () => {
        
        if(userInput.value !== '') {
            const nameUser = userInput.value;
            userDiv.innerText = `${nameUser.charAt(0).toUpperCase() + nameUser.slice(1)}`
            userInput.value = '';
            divBlock.classList.add('unlock');

            // calculadora
            const calculator = new Calculator(nameUser);
        }
    })

    // resfreh html
    type Op = {
        nome: string|null,
        operacao: string|null,
        resultado: number|null,
    }
    const table: HTMLTableElement = document.getElementById('myTable') as HTMLTableElement;

    async function getOperations() {
        const response = await fetch('http://localhost/operacoes/back-end/public/operacoes');
        const data: Array<Op> = await response.json();
      
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

        // filter
        const filterInput: HTMLInputElement = document.getElementById('filter-input') as HTMLInputElement;
        const filterOptions: HTMLOptGroupElement = document.getElementById('filter-options') as HTMLOptGroupElement;

        filterInput.addEventListener('keyup', (e) => {
            atualizarOperations(e.target.value)
        })

        function atualizarOperations(typedText: string) {
            let filterOperations = data.filter(operation => {
                return operation.nome?.toLowerCase().includes(typedText.toLowerCase());
            })

            table.innerHTML = ''
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

            filterOperations.forEach(item => {
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


    
    }
    
    getOperations()

    

}

main()







