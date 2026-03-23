const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


const exampleEl = document.getElementById('example')
const tooltip = new bootstrap.Tooltip(exampleEl, options)