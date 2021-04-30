const listCont = document.getElementById('item-list')
const formCont = document.getElementById('form-container')
const btnCont = document.getElementById('btn-cont')
const iListCont = document.getElementById('item-container')
const iInfoCont = document.getElementById('full-info')
const allPic = document.getElementById('all-items')
const stonePic = document.getElementById('stones')
const herbPic = document.getElementById('herbs')
const candlePic = document.getElementById('candles')


document.getElementById('new-item').addEventListener('click', showNewForm)
allPic.addEventListener('click', showAll)
stonePic.addEventListener('click', showStones)
herbPic.addEventListener('click', showHerbs)
candlePic.addEventListener('click', showCandles)

function showNewForm(){
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
    categoryApi.addCategories()
    document.getElementById('submit').addEventListener('click', itemApi.addItem)

}

function showAll(){
    stonePic.classList.add("hidden")
    herbPic.classList.add("hidden")
    candlePic.classList.add("hidden")

    
}

function showStones(){
    allPic.classList.add("hidden")
    herbPic.classList.add("hidden")
    candlePic.classList.add("hidden")

    console.log(event)
    console.log(this)
    console.log(Category.all)
    console.log(Item.all)
    debugger
    //display only stone category
}

function showHerbs(){
    stonePic.classList.add("hidden")
    allPic.classList.add("hidden")
    candlePic.classList.add("hidden")

    //display only herb category
}

function showCandles(){
    stonePic.classList.add("hidden")
    herbPic.classList.add("hidden")
    allPic.classList.add("hidden")

    //display only candle category
}

itemApi.grabItems()
categoryApi.getCategories()