class Item {
    static all = []

    constructor({id, name, price, quantity, description, image_url, category_id, category_name}){
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description
        this.image_url = image_url
        this.category_id = category_id
        this.category = category_name

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

    showFullDetails = () => {
        iListCont.classList.add("hidden")
        iInfoCont.classList.remove("hidden")

        const pic = document.createElement('img')
        pic.src = `${this.image_url}`
        pic.classList.add("pic")
        
        iInfoCont.innerHTML = `
            <span class="info-name"><strong>${this.name}</strong></span><br>
            <span class="info-price">Price: $${this.price}</span> | <span class="info-quantity">Quantity: ${this.quantity}</span><br><br>
            <span class="info-description">${this.description}</span><br>
        `
        iInfoCont.appendChild(pic)
        this.toggleButtons()
    }

    toggleButtons() {
        formCont.classList.add("hidden")
        btnCont.innerHTML = ""
        btnCont.classList.remove("hidden")

        const backBtn = document.createElement('button')
        backBtn.innerHTML = "⮨ item list"
        btnCont.appendChild(backBtn)
        backBtn.addEventListener('click', this.handleBackBtn)

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

    handleBackBtn(e){
        iInfoCont.classList.add("hidden")
        btnCont.classList.add("hidden")
        iListCont.classList.remove("hidden")
        formCont.classList.remove("hidden")
    }

}