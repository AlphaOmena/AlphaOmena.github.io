document.addEventListener('DOMContentLoaded', () => {
    const itemNameInput = document.getElementById('itemName');
    const itemStockInput = document.getElementById('itemStock');
    const addItemBtn4stock = document.getElementById('addItemBtn4stock');
    const soldItemNameSelect = document.getElementById('soldItemName');
    const soldQuantityInput = document.getElementById('soldQuantity');
    const sellItemBtn = document.getElementById('sellItemBtn');
    const soldItemsTableBody = document.querySelector('#soldItemsTable tbody');
    const clearAllBtn4stock = document.getElementById('clearAllBtn4stock');

    let inventory = loadInventory(); // Load data from localStorage

    function saveInventory() {
        localStorage.setItem('inventory', JSON.stringify(inventory));
    }

    function loadInventory() {
        const storedInventory = localStorage.getItem('inventory');
        return storedInventory ? JSON.parse(storedInventory) : {};
    }

    function renderTable() {
        soldItemsTableBody.innerHTML = '';
        soldItemNameSelect.innerHTML = ''; // Clear select options

        for (const name in inventory) {
            const item = inventory[name];
            const row = soldItemsTableBody.insertRow();
            row.innerHTML = `
                <td>${name}</td>
                <td>${item.soldCount}</td>
                <td>${item.stock}</td>
                <td><button class="delete-btn" data-item-name="${name}">Delete</button></td>
            `;

            // Add option to sell select
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            soldItemNameSelect.appendChild(option);
        }
        saveInventory();
    }

    addItemBtn4stock.addEventListener('click', () => {
        const name = itemNameInput.value.trim();
        const stock = parseInt(itemStockInput.value);

        if (name && !isNaN(stock) && stock >= 0) {
            if (inventory[name]) {
                alert('Item already exists. Update stock instead of adding a new one.');
            } else {
                inventory[name] = { soldCount: 0, stock: stock };
                itemNameInput.value = '';
                itemStockInput.value = 0;
                renderTable();
            }
        } else {
            alert('Please enter a valid item name and initial stock.');
        }
    });

    sellItemBtn.addEventListener('click', () => {
        const name = soldItemNameSelect.value;
        const quantity = parseInt(soldQuantityInput.value);

        if (name && inventory[name] && !isNaN(quantity) && quantity > 0) {
            if (inventory[name].stock >= quantity) {
                inventory[name].soldCount += quantity;
                inventory[name].stock -= quantity;
                soldQuantityInput.value = 1;
                renderTable();
            } else {
                alert('Not enough stock available for this item.');
            }
        } else {
            alert('Please select an item and enter a valid quantity.');
        }
    });

    soldItemsTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const itemName = event.target.dataset.itemName;
            if (confirm(`Are you sure you want to delete "${itemName}"?`)) {
                delete inventory[itemName];
                renderTable();
            }
        }
    });

    clearAllBtn4stock.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
            inventory = {};
            renderTable();
        }
    });

    renderTable(); // Initial render on page load
});