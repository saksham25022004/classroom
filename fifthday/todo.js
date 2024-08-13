function add() {
    const input = document.getElementById('items');
    const list = document.getElementById('list');

    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            list.removeChild(li);
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = ''; 
    }
}

function clearTasks() {
    const list = document.getElementById('list');
    list.innerHTML = '';
}
