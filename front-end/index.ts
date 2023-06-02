import Calculator from "./classes/Calculator.js";
import Util from "./classes/Util.js";

function main() {
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
}

main()






