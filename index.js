const catUrl = "http://localhost:3000/categories"
const listCont = document.getElementById('item-list')
const formCont = document.getElementById('form-container')
const btnCont = document.getElementById('btn-cont')
const iListCont = document.getElementById('item-container')
const iInfoCont = document.getElementById('full-info')

document.getElementById('new-item').addEventListener('click', showNewForm)

function showNewForm(e){
    this.parentElement.innerHTML = `
        <h1>Create New Item</h1>
        Item Name: <input type="text" id="create-name" name="name"><br>
        Price: <input type="number" id="create-price" name="price"><br>
        Quantity: <input type="number" id="create-quantity" name="quantity"><br>
        Description: <textarea id="create-desc" name="description"></textarea><br><br>
        Image URL: <input type="text" id="create-img-url" name="image_url"><br>
        <input type="submit" id="submit">
    `
    document.getElementById('submit').addEventListener('click', itemApi.addItem)

}

itemApi.grabItems()