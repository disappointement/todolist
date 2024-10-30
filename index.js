const addNewItem = () => {
  const input = document.getElementById('new-item-input');
  const inputValue = input.value;
  if (inputValue === '') {
    alert('Please enter a value');
    return;
  }

  const list = document.getElementById('list');

  const li = document.createElement('li');
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });
  list.appendChild(li);

  const text = document.createElement('div');
  text.classList.add('todo-text');
  text.innerHTML = inputValue;
  li.appendChild(text);

  const editButton = document.createElement('button');
  editButton.classList.add('todo-edit-button');
  editIcon = document.createElement('span');
  editIcon.classList.add('material-icons', 'edit-icon');
  editIcon.innerHTML = 'edit';
  editButton.appendChild(editIcon);
  editButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const newValue = prompt('Enter new value');
    console.log(newValue);
    if (newValue === '') {
      alert('Please enter a value');
      return;
    }
    text.innerHTML = newValue;
  });
  li.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('todo-delete-button');
  deleteIcon = document.createElement('span');
  deleteIcon.classList.add('material-icons', 'delete-icon');
  deleteIcon.innerHTML = 'delete';
  deleteButton.appendChild(deleteIcon);
  deleteButton.addEventListener('click', (event) => {
    event.stopPropagation();
    list.removeChild(li);
  });
  li.appendChild(deleteButton);

  input.value = '';
};

const init = () => {
  const button = document.getElementById('add-item-button');
  button.addEventListener('click', addNewItem);
};

init();
