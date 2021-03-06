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

    static showExpensiveItems = () =>{
        addHidden(fullView)
        addHidden(formCont)
        clearElement(listCont)
        clearElement(btnCont)
        clearElement(iInfoCont)

        const container = document.getElementById('over-10-dollars')
        const items = this.all.filter(item => item.price > 9.99)
        
        items.forEach(item => {
            const li = document.createElement('li')
            li.innerHTML = `<strong>${item.name}</strong> - ${item.price}<br><br>`
            container.append(li)
        })
    
    }

    addToList(){
        this.li.innerHTML= `<strong>${this.name}</strong> - ${this.price}<br><br>`
        listCont.appendChild(this.li)
    }

    showFullDetails = () => {
        removeHidden(fullView)
        removeHidden(iInfoCont)
        clearElement(listCont)

        iInfoCont.innerHTML = `
            <span class="info-name"><strong>${this.name}</strong></span><br>
            <span class="info-price">Price: $${this.price}</span> | <span class="info-quantity">Quantity: ${this.quantity}</span><br><br>
            <span class="info-description">${this.description}</span><br><br><br>
        `
        
        const pic = document.createElement('img')
        pic.src = `${this.image_url}`
        pic.classList.add("pic")
        iInfoCont.appendChild(pic)
        
        this.toggleButtons()
    }

    toggleButtons() {
        btnCont.innerHTML = ""
        removeHidden(btnCont)

        const editBtn = document.createElement('button')
        editBtn.innerText = "Edit Item Info"
        editBtn.id = "edit-button"
        btnCont.appendChild(editBtn)
        editBtn.addEventListener('click', this.handleEditBtn)

        const increaseBtn = document.createElement('button')
        increaseBtn.innerText = "Increase Quantity"
        increaseBtn.id = "add-button"
        btnCont.appendChild(increaseBtn)
        increaseBtn.addEventListener('click', this.handleAddBtn)

        const decreaseBtn = document.createElement('button')
        decreaseBtn.innerText = "Decrease Quantity"
        decreaseBtn.id = "subtract-button"
        btnCont.appendChild(decreaseBtn)
        decreaseBtn.addEventListener('click', this.handleSubtractBtn)
    }

    handleEditBtn = (e) =>{
        if (e.target.innerText === "Edit Item Info"){
            e.target.innerText = "Save Changes"
            this.hideInfoBtns()
            this.createEditForm()

        } else if (e.target.innerText === "Save Changes"){
            e.target.innerText = "Edit Item Info"
            this.saveEditedInfo()
            this.showInfoBtns()
        }
    }

    hideInfoBtns(){
        const increase = document.getElementById('add-button')
        const decrease = document.getElementById('subtract-button')

        addHidden(increase)
        addHidden(decrease)
    }

    showInfoBtns(){
        addHidden(formCont)
        const increase = document.getElementById('add-button')
        const decrease = document.getElementById('subtract-button')

        removeHidden(increase)
        removeHidden(decrease)
    }

    createEditForm(){
        formCont.innerHTML = `
            Name: <input type="text" id="new-name" name="name" value="${this.name}"><br>
            Price: <input type="number" id="new-price" name="price" value="${this.price}"><br>
            Description: <textarea id="new-desc" name="description">${this.description}</textarea><br>
            Image URL: <input type="text" id="new-image" name="image_url" value="${this.image_url}"><br><br>
        `
        removeHidden(formCont)
    }

    saveEditedInfo(){
        this.name = document.getElementById('new-name').value
        this.price = document.getElementById('new-price').value
        this.description = document.getElementById('new-desc').value
        this.image_url = document.getElementById('new-image').value

        itemApi.editItem(this)
    }

    handleAddBtn = () => {
        this.quantity = this.quantity += 1
        itemApi.editItem(this)
    }

    handleSubtractBtn = () =>{
        this.quantity = this.quantity -= 1
        itemApi.editItem(this)
    }

}