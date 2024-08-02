document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('item-form');
    const itemList = document.getElementById('item-list');
    const itemInput = document.getElementById('item-input');

    // Load items from localStorage
    const loadItems = () => {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.forEach(item => addItemToDOM(item));
    };

    // Add item to the DOM
    const addItemToDOM = (item) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeItem(item);
        li.appendChild(removeBtn);
        itemList.appendChild(li);
    };

    // Add item to localStorage and DOM
    const addItem = (item) => {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
        addItemToDOM(item);
    };

    // Remove item from localStorage and DOM
    const removeItem = (item) => {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items = items.filter(i => i !== item);
        localStorage.setItem('items', JSON.stringify(items));
        renderItems();
    };

    // Render items in the DOM
    const renderItems = () => {
        itemList.innerHTML = '';
        loadItems();
    };

    // Handle form submit
    itemForm.onsubmit = (e) => {
        e.preventDefault();
        const newItem = itemInput.value.trim();
        if (newItem) {
            addItem(newItem);
            itemInput.value = '';
        }
    };

    // Initial load
    renderItems();
});
