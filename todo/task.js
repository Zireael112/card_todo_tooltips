const submitInp = document.getElementById('task__input')
const todoList = document.getElementById('tasks__list')
const todoAdd = document.getElementById('tasks__add')

todoAdd.addEventListener('click', (event) => {
    if (submitInp.value.trim() === '') {
        event.preventDefault()
        return
    }
        // console.log(submitInp.value);
        // todoList.innerHTML += `
        // <div class="task">
        //     <div class="task__title">
        //         ${submitInp.value}
        //     </div>
        //     <a href="#" class="task__remove">&times;</a>
        // </div>        
        // `

        textHTML = `
        <div class="task">
            <div class="task__title">
                ${submitInp.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>        
        `
        
        todoList.insertAdjacentHTML('afterbegin', textHTML)

        let links = document.querySelectorAll('a.task__remove')

        for (let link of links) {
            link.onclick = () => {
                link.parentElement.remove()
            }
        }

        submitInp.value = ''
        event.preventDefault()

})
