// Here we create the array that contains the different options 
let itemList = [];
let firstBlock = document.getElementById('firstBlock');
let secondBlock = document.getElementById('secondBlock');
let thirdBlock = document.getElementById('thirdBlock');
let resultEl = document.getElementById('resultEl');

// Here we create the variables and function that will add the options to the array. This block of code, will also 
// create a new button to generate the answer
let btnAdd = document.querySelector('button');
let input1 = document.getElementById('firstInput');
let input2 = document.getElementById('secondInput');
let input3 = document.getElementById('thirdInput');

btnAdd.addEventListener('click', () => {
    itemList.push(input1.value);
    itemList.push(input2.value);
    itemList.push(input3.value);
    input1.value = '';
    input2.value = '';
    input3.value = '';
    firstBlock.style.visibility='hidden';
    secondBlock.style.display='block';
})
// Here we create the variable and function that will clear the array
let btnClear = document.getElementById('btnClear');

btnClear.addEventListener('click', () => {
    itemList.splice(0, itemList.length);
    input1.value = '';
    input2.value = '';
    input3.value = '';
})

// Here we make the second block dissappear and the third block appear

let generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', () => {
    let randomEl = itemList[Math.floor(Math.random()*itemList.length)];
    thirdBlock.style.display='block';
    secondBlock.style.display='none';
    resultEl.innerHTML = randomEl;
})

