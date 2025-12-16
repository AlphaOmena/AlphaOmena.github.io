document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
        const form = column.querySelector('.item-form');
        const input = column.querySelector('.item-input');
        const list = column.querySelector('.item-list');
        const countSpan = column.querySelector('.count');
        const totalSpan = column.querySelector('.total');
        const fortyPercentSpan = column.querySelector('.forty-percent');
        const fiftyPercentSpan = column.querySelector('.fifty-percent');
        const remainderFortySpan = column.querySelector('.remainder-forty');
        const remainderFiftySpan = column.querySelector('.remainder-fifty');
        const clearAllBtn = column.querySelector('.clear-all');
        const searchBar = column.querySelector('.search-bar');
        const storageKey = `items_${column.id}`;

        let items = JSON.parse(localStorage.getItem(storageKey)) || [];

        function renderItems() {
            list.innerHTML = '';
            let total = 0;
            items.forEach((itemText, index) => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${itemText}</span>`;
                
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.classList.add('delete-btn');
                deleteBtn.onclick = () => deleteItem(index);

                li.appendChild(deleteBtn);
                list.appendChild(li);

                // Calculate total if item is a number
                const num = parseFloat(itemText);
                if (!isNaN(num)) {
                    total += num;
                }
            });

            // Update summary info
            countSpan.textContent = items.length;
            totalSpan.textContent = total.toFixed(2);
            fortyPercentSpan.textContent = (total * 0.4).toFixed(2);
            fiftyPercentSpan.textContent = (total * 0.5).toFixed(2);
            remainderFortySpan.textContent = (total - total * 0.4).toFixed(2);
            remainderFiftySpan.textContent = (total - total * 0.5).toFixed(2);

            saveItems();
        }

        function saveItems() {
            localStorage.setItem(storageKey, JSON.stringify(items));
        }

        function addItem(e) {
            e.preventDefault();
            const itemText = input.value.trim();
            if (itemText) {
                items.push(itemText);
                input.value = '';
                renderItems();
            }
        }

        function deleteItem(index) {
            items.splice(index, 1);
            renderItems();
        }

        function clearAll() {
            items = [];
            renderItems();
        }

        function searchItems() {
            const searchTerm = searchBar.value.toLowerCase();
            const listItems = list.querySelectorAll('li');
            listItems.forEach(item => {
                const text = item.querySelector('span').textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Event listeners
        form.addEventListener('submit', addItem);
        clearAllBtn.addEventListener('click', clearAll);
        searchBar.addEventListener('input', searchItems);

        // Initial render
        renderItems();
    });
});


