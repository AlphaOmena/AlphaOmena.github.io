document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const searchInput = document.getElementById('searchInput');
    const itemTableBody = document.querySelector('#itemTable tbody');
    const totalSumElement = document.getElementById('totalSum');
    const clearAllBtn = document.getElementById('clearAllBtn');

    let items = JSON.parse(localStorage.getItem('items')) || [];

    function renderItems() {
        itemTableBody.innerHTML = '';
        let totalSum = 0;

        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );

        filteredItems.forEach((item, index) => {
            const row = itemTableBody.insertRow();
            row.insertCell(0).textContent = item.name;
            row.insertCell(1).textContent = item.count;

            const actionsCell = row.insertCell(2);
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => deleteItem(index));
            actionsCell.appendChild(deleteBtn);

            if (!isNaN(parseFloat(item.name)) && isFinite(item.name)) {
                totalSum += parseFloat(item.name) * item.count;
            }
        });
        totalSumElement.textContent = totalSum.toFixed(2);
        localStorage.setItem('items', JSON.stringify(items));
    }

    function addItem() {
        const itemName = itemInput.value.trim();
        if (itemName === '') return;

        const existingItemIndex = items.findIndex(item => item.name === itemName);

        if (existingItemIndex > -1) {
            items[existingItemIndex].count++;
        } else {
            items.push({ name: itemName, count: 1 });
        }
        itemInput.value = '';
        renderItems();
    }

    function deleteItem(index) {
        items.splice(index, 1);
        renderItems();
    }

    function clearAll() {
        items = [];
        renderItems();
    }

    addItemBtn.addEventListener('click', addItem);
    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });
    searchInput.addEventListener('input', renderItems);
    clearAllBtn.addEventListener('click', clearAll);

    renderItems(); // Initial render on page load
});