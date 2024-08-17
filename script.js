const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task-input');

addTaskBtn.addEventListener('click', () => {
	const newTask = newTaskInput.value.trim();
	if (newTask) {
		const newTaskListItem = document.createElement('li');
		newTaskListItem.innerHTML = `
			<span>${newTask}</span>
				<button class="done-btn">Done</button>
				<button class="edit-btn">Edit</button>
				<button class="delete-btn">Delete</button>
		`;
		taskList.appendChild(newTaskListItem);
		newTaskInput.value = '';
	}
});
	taskList.addEventListener('click', (e) => {
		const target = e.target.closest('.done-btn, .edit-btn, .delete-btn');
		if (target) {
		  if (target.classList.contains('done-btn')) {
			target.previousElementSibling.style.textDecoration = 'line-through';
			target.disabled = true;
		  } else if (target.classList.contains('edit-btn')) {
			const taskSpan = target.previousElementSibling.previousElementSibling;
			const newTask = prompt('Edit task:', taskSpan.textContent);
			if (newTask) {
			  taskSpan.textContent = newTask;
			}
		  } else if (target.classList.contains('delete-btn')) {
			e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent = '';
		  }
		}
	  });