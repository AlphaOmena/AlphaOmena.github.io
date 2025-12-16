document.addEventListener('DOMContentLoaded', () => {
    const expenseNameInput = document.getElementById('expenseName');
    const expenseAmountInput = document.getElementById('expenseAmount');
    const addExpenseButton = document.getElementById('addExpense');
    const expenseList = document.getElementById('expenseList');
    const totalAmountSpan = document.getElementById('totalAmount');
    const clearAllButton = document.getElementById('clearAll');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function renderExpenses() {
        expenseList.innerHTML = '';
        let total = 0;
        expenses.forEach((expense, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${expense.name}: Ksh${expense.amount.toFixed(2)}</span>
                <button data-index="${index}">Delete</button>
            `;
            expenseList.appendChild(listItem);
            total += expense.amount;
        });
        totalAmountSpan.textContent = total.toFixed(2);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function addExpense() {
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value);

        if (name && !isNaN(amount) && amount > 0) {
            expenses.push({ name, amount });
            expenseNameInput.value = '';
            expenseAmountInput.value = '';
            renderExpenses();
        } else {
            alert('Please enter a valid expense name and amount.');
        }
    }

    function deleteExpense(event) {
        if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Delete') {
            const index = parseInt(event.target.dataset.index);
            expenses.splice(index, 1);
            renderExpenses();
        }
    }

    function clearAllExpenses() {
        if (confirm('Are you sure you want to clear all expenses?')) {
            expenses = [];
            renderExpenses();
        }
    }

    addExpenseButton.addEventListener('click', addExpense);
    expenseList.addEventListener('click', deleteExpense);
    clearAllButton.addEventListener('click', clearAllExpenses);

    renderExpenses(); // Initial render on page load
});