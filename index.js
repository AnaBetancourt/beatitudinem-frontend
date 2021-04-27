const catUrl = "http://localhost:3000/categories"
const listCont = document.getElementById('item-list')
const formCont = document.getElementById('form-container')
const btnCont = document.getElementById('btn-cont')
const iListCont = document.getElementById('item-container')
const iInfoCont = document.getElementById('full-info')

function showAddBtns(){
    formCont.innerHTML = `
        <button id="new-item">Add Item</button>
        <button id="new-category">Add Category</button>
    `
}

showAddBtns()
itemApi.grabItems()