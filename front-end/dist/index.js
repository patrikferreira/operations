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
