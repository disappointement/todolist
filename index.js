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
  li.setAttribute('created-at', new Date());
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

const sortlist = (sorting) => {
  console.log(sorting);
  const list = document.getElementById('list');
  const items = list.getElementsByTagName('li');
  var itemsArray = Array.from(items);

  console.log(itemsArray);

  switch (sorting) {
    case 'newest':
      sortByDate(itemsArray, 'latest');
      break;
    case 'oldest':
      sortByDate(itemsArray, 'oldest');
      break;
    case 'alphanumeric-asc':
      itemsArray = sortAlphabetically(itemsArray, 'asc');
      break;
    case 'alphanumeric-desc':
      itemsArray = sortAlphabetically(itemsArray, 'desc');
      break;
    case 'done':
      itemsArray = itemsArray.filter((item) => item.classList.contains('done'));
      break;
    case 'not-done':
      itemsArray = itemsArray.filter(
        (item) => !item.classList.contains('done')
      );
      break;
    default:
      break;
  }

  list.innerHTML = '';
  itemsArray.forEach((item) => {
    list.appendChild(item);
  });
};

const sortByDate = (items, order) => {
  return items.sort((a, b) => {
    const dateA = new Date(a.getAttribute('created-at'));
    const dateB = new Date(b.getAttribute('created-at'));

    if (order === 'latest') {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
};

const sortAlphabetically = (items, order) => {
  return items.sort((a, b) => {
    const textA = a.getElementsByClassName('todo-text')[0].innerHTML;
    const textB = b.getElementsByClassName('todo-text')[0].innerHTML;

    if (order === 'asc') {
      return textA.localeCompare(textB);
    } else {
      return textB.localeCompare(textA);
    }
  });
};

const init = () => {
  const button = document.getElementById('add-item-button');
  button.addEventListener('click', addNewItem);
  document
    .getElementById('new-item-input')
    .addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addNewItem();
      }
    });
};

init();
