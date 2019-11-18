const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserInputNumber() {
    return parseInt(userInput.value);
}

// generates and write logs
function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function addNumbers() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtractNumbers() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiplyNumbers() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divideNumbers() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}


addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers)
multiplyBtn.addEventListener('click', multiplyNumbers)
divideBtn.addEventListener('click', divideNumbers)