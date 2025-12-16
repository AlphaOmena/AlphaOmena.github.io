document.addEventListener('DOMContentLoaded', () => {
    const itemInputServe = document.getElementById('itemInputServe');
    const addItemBtnServe = document.getElementById('addItemBtnServe');
    const clearAllBtnServe = document.getElementById('clearAllBtnServe');
    const itemListServe = document.getElementById('itemListServe');

    let items = JSON.parse(localStorage.getItem('items')) || {};

    function saveItems() {
        localStorage.setItem('items', JSON.stringify(items));
    }

    function renderItems() {
        itemListServe.innerHTML = '';
        for (const itemName in items) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="item-name">${itemName}</span>
                <span class="item-count">Count: ${items[itemName]}</span>
                <button class="delete-btn" data-item="${itemName}">Delete</button>
            `;
            itemListServe.appendChild(li);
        }
    }

    function addItem() {
        const itemName = itemInputServe.value.trim();
        if (itemName) {
            items[itemName] = (items[itemName] || 0) + 1;
            itemInputServe.value = '';
            saveItems();
            renderItems();
        }
    }

    function deleteItem(itemName) {
        delete items[itemName];
        saveItems();
        renderItems();
    }

    function clearAllItems() {
        items = {};
        saveItems();
        renderItems();
    }

    addItemBtnServe.addEventListener('click', addItem);
    clearAllBtnServe.addEventListener('click', clearAllItems);

    itemListServe.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const itemName = event.target.dataset.item;
            deleteItem(itemName);
        }
    });

    renderItems(); // Initial render when the page loads
});

