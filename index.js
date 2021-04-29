const listCont = document.getElementById('item-list')
const formCont = document.getElementById('form-container')
const btnCont = document.getElementById('btn-cont')
const iListCont = document.getElementById('item-container')
const iInfoCont = document.getElementById('full-info')

document.getElementById('new-item').addEventListener('click', showNewForm)

function showNewForm(){
    categoryApi.getCategories()

    this.parentElement.innerHTML = `
        <h1>Create New Item</h1>
        <label for="name">Item Name:</label>
        <input type="text" id="create-name" name="name"><br>
        <label for="price">Price:</label>
        <input type="number" id="create-price" name="price"><br>
        <label for="quantity">Quantity:</label>
        <input type="number" id="create-quantity" name="quantity"><br>
        <label for="description">Description:</label>
        <textarea id="create-desc" name="description"></textarea><br>
        <label for="image_url">Image URL:</label>
        <input type="text" id="create-img-url" name="image_url"><br>
        <label for="category">Category:</label>
        <select name="categories" id="dropdown"</select><br><br>
        <label for="submit"></label><br><br>
        <input type="submit" id="submit">
    `
    document.getElementById('submit').addEventListener('click', itemApi.addItem)

}

itemApi.grabItems()