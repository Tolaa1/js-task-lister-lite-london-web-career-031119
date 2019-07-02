document.addEventListener("DOMContentLoaded", () => {
  ivMc = document.querySelector('div')
  formEl = document.querySelector('#create-task-form')
})


 const formEl = document.querySelector('#create-task-form')
 const descEl = document.querySelector('#new-task-description')

 const tasks = document.querySelector('#tasks')
formEl.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskLi = document.createElement('li') // result: <li></li>

  taskLi.innerText = `${ descEl.value}`

  tasks.append(taskLi)
// descEl.value = ''
  formEl.reset()
})
 

// append apple to tree
