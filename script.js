const html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader",
    { fps: 10, qrbox: 300 },
    /* verbose= */ false
);

let scannedNumbers = JSON.parse(localStorage.getItem('scannedNumbers')) || [];
let totalSum = 0;
let isScanningActive = true; // Flag to control scanning activity


const scannedList = document.getElementById('scanned-list');
const totalSumSpan = document.getElementById('total-sum');
const subtractBtn = document.getElementById('subtract-btn');
const inputNumber = document.getElementById('input-number');
const subtractButton = document.getElementById('subtract-button');
const subtractionResult = document.getElementById('subtraction-result');
const deleteBtn = document.getElementById('delete-btn1');

function updateDisplay() {
    scannedList.innerHTML = '';
    totalSum = 0;
    scannedNumbers.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        scannedList.appendChild(li);
        totalSum += num;
    });
    totalSumSpan.textContent = totalSum;
    localStorage.setItem('scannedNumbers', JSON.stringify(scannedNumbers));
}

function onScanSuccess(decodedText, decodedResult) {
    if (isScanningActive) {
    const number = parseInt(decodedText);
    if (!isNaN(number)) {
        scannedNumbers.push(number);
        updateDisplay();
        
        isScanningActive = false; // Disable scanning temporarily
        // Re-enable scanning after a delay (e.g., 2000 milliseconds or 2 seconds)
        setTimeout(() => {
            isScanningActive = true;
        }, 2000); // Adjust the delay as needed

    }
    }}

subtractBtn.addEventListener('click', () => {
    if (scannedNumbers.length > 0) {
        scannedNumbers.pop();
        updateDisplay();
    }
});

deleteBtn.addEventListener('click', () => {
    scannedNumbers = [];
    updateDisplay();
});

subtractButton.addEventListener('click', () => {
    const inputNumber = parseFloat(document.getElementById('input-number').value);
    if (!isNaN(inputNumber)) {
        const netSales = totalSum - inputNumber;
        subtractionResult.textContent = netSales;
    }
});

html5QrcodeScanner.render(onScanSuccess);
updateDisplay(); // Initialize display on page load