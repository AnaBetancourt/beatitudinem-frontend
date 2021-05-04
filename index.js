const listCont = document.getElementById('item-list')
const formCont = document.getElementById('form-container')
const btnCont = document.getElementById('btn-cont')
const iInfoCont = document.getElementById('full-info')
const navigation = document.getElementById('navigation')
const fullView = document.getElementById('item-view')

navigation.addEventListener('click', handleNavigationClick)

function clearElement(element){
    element.innerHTML = ""
}

function addHidden(element){
    element.classList.add("hidden")
}

function removeHidden(element){
    element.classList.remove("hidden")
}

function handleNavigationClick(event){
    const clickedBtn = event.target.parentElement.id

    if (clickedBtn === "new-item"){
        showNewForm()
    } else if (clickedBtn === "all-items"){
        showAll()
    } else {
        showCategory(clickedBtn)
    }
}

function showNewForm(){
    clearElement(listCont)
    clearElement(btnCont)
    clearElement(iInfoCont)
    removeHidden(formCont)
    removeHidden(fullView)

    formCont.innerHTML = `
        <h1>Create New Item</h1>
        <form id="new-item-form">
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
        </form>
    `
    categoryApi.addCategories()
    document.getElementById('new-item-form').addEventListener('submit', itemApi.addItem)
}

function showAll(){
    addHidden(fullView)
    addHidden(formCont)
    clearElement(listCont)
    clearElement(btnCont)
    clearElement(iInfoCont)

    const expensive = document.createElement('button')
    expensive.id = "expensive-btn"
    expensive.innerText = "Items Over $10"
    expensive.addEventListener('click', Item.showExpensiveItems)

    document.getElementById('new-btn').append(expensive)

    Item.all.forEach(item => item.addToList())
}

function showCategory(clickedBtn){
    addHidden(fullView)
    addHidden(formCont)
    clearElement(listCont)
    clearElement(btnCont)
    clearElement(iInfoCont)
    
    const clickedCategory = Category.all.find(category => category.name === clickedBtn)

    if (clickedCategory.name === "stones"){
        const list = clickedCategory.allItems()
        list.forEach(item => item.addToList())

    } else if (clickedCategory.name === "herbs"){
        const list = clickedCategory.allItems()
        list.forEach(item => item.addToList())

    } else if (clickedCategory.name === "candles"){
        const list = clickedCategory.allItems()
        list.forEach(item => item.addToList())
    }
}

itemApi.grabItems()
categoryApi.getCategories()