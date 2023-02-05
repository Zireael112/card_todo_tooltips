const submitInp = document.getElementById('task__input')
const todoList = document.getElementById('tasks__list')
const todoAdd = document.getElementById('tasks__add');

todoAdd.addEventListener('click', (event) => {
    if (submitInp.value === ''.trim()) return
        // console.log(submitInp.value);
        todoList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${submitInp.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>        
        `
        
        let links = document.querySelectorAll('a.task__remove')

        for (let link of links) {
            link.onclick = () => {
                link.closest('.task').outerHTML = ''.trim()
            }
        }
    
        submitInp.value = ''
        event.preventDefault();

})

