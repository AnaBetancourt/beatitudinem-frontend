class Item {
    static allItems = []

    constructor({id, name, price, quantity, description, image_url, category_id}){
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description
        this.image_url = image_url
        this.category_id = category_id
    }

    addToList(){
        const li = document.createElement('li')
        li.innerText = `${this.name} - $${this.price}`
    
        listCont.appendChild(li)
    }
}