const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Digite uma tarefa antes de adicionar!");
    return;
  }
  addTask(taskText);
  taskInput.value = "";
});

function addTask(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const editBtn = document.createElement('button');
  editBtn.textContent = "Editar";
  editBtn.classList.add('acao', 'editar');
  editBtn.addEventListener('click', () => editTask(span));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Excluir";
  deleteBtn.classList.add('acao', 'excluir');
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function editTask(span) {
  const novoTexto = prompt("Editar tarefa:", span.textContent);
  if (novoTexto !== null && novoTexto.trim() !== "") {
    span.textContent = novoTexto.trim();
  }
}
