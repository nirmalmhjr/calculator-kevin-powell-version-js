/*
let calculator = document.querySelectorAll('.calculator');
let keys = document.querySelector('.calculator-keys');
let display =   document.querySelector('.calculator-display');


keys.addEventListener('click', event => {
    if(!event.target.closest('button')) return;
    
    let key =   event.target;
    let displayValue = display.textContent;
    let { type } = key.dataset;
        
    display.textContent = key.textContent

    // this is a number??
    if(type === 'number'){
        if(displayValue === '0') {
            display.textContent = key.textContent;
        } else {
            display.textContent = displayValue + key.textContent;
        }
        
    }
    
    if ( type === 'operator') {
        let statedata =document.querySelectorAll('[data-type= "operator"]');
        statedata.forEach(el => { el.dataset.state=''});
        
        
        key.dataset.state = 'selected';
        
        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator =   key.dataset.key;
        

    }

    if( type ==='equal') {
        let firstNumber = calculator.dataset.firstNumber;
        let operator    = calculator.dataset.key;
        let secondNumber = displayValue;
        

    }


})
*/

let calculator = document.querySelector('.calculator');
let keys = calculator.querySelector('.calculator-keys');
let display = calculator.querySelector('.calculator-display');
let operatorKeys = keys.querySelectorAll('[data-type="operator"]');


keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return {
        
    }
   
    let key = event.target;
    let displayValue =display.textContent;
    let { type } = key.dataset;
    let { previousKeyType } = calculator.dataset;
    let result ='';

    
    
    
    if (type === "number") {
        if (displayValue === '0' || previousKeyType === 'operator') {
            display.textContent = key.textContent;
        } else {
            display.textContent = displayValue + key.textContent
        }
        
    }
    
    if (type === "operator") {
        
        operatorKeys.forEach(el => {el.dataset.state = ''});
        key.dataset.state= "selected";

        

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if (type === "equal") {
        firstNumber = calculator.dataset.firstNumber;
        operator = calculator.dataset.operator;
        secondNumber = displayValue;

        // firstNumber = parseInt(firstNumber);
        // secondNumber = parseInt(secondNumber);
        
        // if (operator === 'plus') {result = firstNumber + secondNumber }
        // if (operator === 'minus') {result = firstNumber - secondNumber }
        // if (operator === 'times') {result = firstNumber * secondNumber }
        // if (operator === 'divide') {result = firstNumber / secondNumber}

        // display.textContent = result;

        display.textContent = calculate();
        operatorKeys.forEach(el =>{el.dataset.state = ''});
        
    }

    if (type === "clear") {
        display.textContent = '0';
        delete calculator.dataset.firstNumber;
        delete calculator.dataset.operator;
        
    }
    
    
    
    calculator.dataset.previousKeyType = type;
})

function calculate(){
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    
    if (operator === 'plus') return  firstNumber + secondNumber 
    if (operator === 'minus') return  firstNumber - secondNumber 
    if (operator === 'times') return  firstNumber * secondNumber 
    if (operator === 'divide') return  firstNumber / secondNumber
    
    

}




//=============
// Testing
//=============
function clearCalculator () {
    let clearKey = calculator.querySelector('[data-type="clear"]');
    clearKey.click();

    operatorKeys.forEach(key => {key.dataset.state = ''});
}

function testClearKey () {
    clearCalculator();
    console.assert(display.textContent = '0','clear Key. Display should be 0');
    console.assert(!calculator.dataset.firstNumber,'Clear Key. No  firstNumber remain');
    console.assert(!calculator.dataset.operator,'Clear Key. No operator remain');

}




let one = calculator.querySelector('[data-key="1"]');
let five    = calculator.querySelector('[data-key="5"]');
let nine    = calculator.querySelector('[data-key="9"]')

/*
function testKeySequence(...keys) {
    let array = [...keys];
    console.log(array);

    //press many many keys
    array.forEach(key => {
        // pressing one key at a time
        calculator.querySelector(`[data-key="${key}"]`).click();
    })

}

testKeySequence('1', '2', '3', '4', '5','6','7','8','9','0')
*/

function testKeySequence(test) {
        test.keys.forEach(key => {
        // pressing one key at a time
        calculator.querySelector(`[data-key="${key}"]`).click();
    })
    console.assert(display.textContent === test.value, test.message)
    clearCalculator();
    testClearKey();
    }

    let tests = [{
        keys : ['1'],
        value : '1',
        message : 'click 1'
    }, {
        keys : ['1','5'],
        value: '15',
        message: 'click 15'
    }, {
        keys : ['1','5','9'],
        value: '159',
        message: 'click 159'
    }, {
        keys : ['1','5','times','9','equal'],
        value: '135',
        message: 'click 15 times 9'
    },{
        keys : ['2','4','plus','6','equal'],
        value: '30',
        message: 'click 15 times 9'
    }, {
        keys : ['3','7','minus','8','0','equal'],
        value: '-43',
        message: 'click 15 times 9'
    }, {
        keys : ['3','7','divide','8','0','equal'],
        value: '0.4625',
        message: 'click 15 times 9'
    }

]


tests.forEach(testKeySequence);
/*
// // 1 test
one.click();
console.assert(display.textContent === '1', 'clicked One');
clearCalculator();
testClearKey();

//15 test
one.click();
five.click();
console.assert(display.textContent==='15', 'just have to be 1 and 5');
clearCalculator();
testClearKey();

// 159
one.click();
five.click();
nine.click();
console.assert(display.textContent ==='159', 'it should be 1 and 5 and 9');
clearCalculator();
testClearKey();
*/


