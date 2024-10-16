const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const header = document.getElementById('header');
const addInput = document.getElementById('add');


let count = 0; 

function updateCount() {
    header.innerText = count; 
}


    incBtn.addEventListener('click', (e) => {
        const incrementValue = Number(addInput.value) || 1; 
        count += incrementValue; 
        updateCount();
    });

    decBtn.addEventListener('click', () => {
        const decrementValue = parseInt(addInput.value) || 1; 
        count -= decrementValue; 
        updateCount(); 
    });

    resetBtn.addEventListener('click', () => {
        count = 0; 
        addInput.value =0;
        updateCount(); 
        
    });



