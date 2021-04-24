class Item {
    static all = []

    constructor({id, name, price, quantity, description, image_url, category_id}){
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description
        this.image_url = image_url
        this.category_id = category_id

        this.li = document.createElement('li')
        this.li.id = `i${id}`

        this.li.addEventListener('click', this.showFullDetails)

        Item.all.push(this)
    }

    addToList(){
        this.li.innerHTML= `
            <div class="item-li" id="${this.id}">
                <strong>${this.name}</strong>
            </div>
            `
        listCont.appendChild(this.li)
    }

    showFullDetails(){
        const iCont = document.getElementById('item-container')
        const newCont = document.getElementById('full-info')
        const i = Item.all.find(item => item.id === this.firstElementChild.id)

        iCont.classList.add("hidden")
        formCont.classList.add("hidden")
        newCont.classList.remove("hidden")

        const pic = document.createElement('img')
        pic.src = `${i.image_url}`
        pic.classList.add("pic")
        
        newCont.innerHTML = `
            <span class="info-name"><strong>${i.name}</strong></span><br>
            <span class="info-price">Price: $${i.price}</span> | <span class="info-quantity">Quantity: ${i.quantity}</span><br><br>
            <span class="info-description">${i.description}</span><br>
        `
        newCont.appendChild(pic)

        const backBtn = document.createElement('button')
        backBtn.innerHTML = "⮨ item list"
        btnCont.appendChild(backBtn)

        const editBtn = document.createElement('button')
        editBtn.innerText = "Edit Item Info"
        btnCont.appendChild(editBtn)

        const increaseBtn = document.createElement('button')
        increaseBtn.innerText = "+"
        btnCont.appendChild(increaseBtn)

        const decreaseBtn = document.createElement('button')
        decreaseBtn.innerText = "-"
        btnCont.appendChild(decreaseBtn)
    }

}