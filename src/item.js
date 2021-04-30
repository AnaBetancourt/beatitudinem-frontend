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
        btnCont.innerHTML = ""
        btnCont.classList.remove("hidden")

        const backBtn = document.createElement('button')
        backBtn.innerText = "⮨ item list"
        backBtn.id = "back-button"
        btnCont.appendChild(backBtn)
        backBtn.addEventListener('click', this.handleBackBtn)

        const editBtn = document.createElement('button')
        editBtn.innerText = "Edit Item Info"
        editBtn.id = "edit-button"
        btnCont.appendChild(editBtn)
        editBtn.addEventListener('click', this.handleEditBtn)

        const increaseBtn = document.createElement('button')
        increaseBtn.innerText = "+"
        increaseBtn.id = "add-button"
        btnCont.appendChild(increaseBtn)
        increaseBtn.addEventListener('click', this.handleAddBtn)

        const decreaseBtn = document.createElement('button')
        decreaseBtn.innerText = "-"
        decreaseBtn.id = "subtract-button"
        btnCont.appendChild(decreaseBtn)
        decreaseBtn.addEventListener('click', this.handleSubtractBtn)
    }

    handleBackBtn(e){
        iInfoCont.classList.add("hidden")
        btnCont.classList.add("hidden")
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
        document.getElementById('back-button').classList.add("hidden")
        document.getElementById('add-button').classList.add("hidden")
        document.getElementById('subtract-button').classList.add("hidden")
    }

    showInfoBtns(){
        document.getElementById('back-button').classList.remove("hidden")
        document.getElementById('add-button').classList.remove("hidden")
        document.getElementById('subtract-button').classList.remove("hidden")

        showAddBtns()
        formCont.classList.add("hidden")
    }

    createEditForm(){
        formCont.innerHTML = `
            Name: <input type="text" id="new-name" name="name" value="${this.name}"><br>
            Price: <input type="number" id="new-price" name="price" value="${this.price}"><br>
            Description: <textarea id="new-desc" name="description">${this.description}</textarea><br><br>
        `
        formCont.classList.remove("hidden")
    }

    saveEditedInfo(){
        this.name = document.getElementById('new-name').value
        this.price = document.getElementById('new-price').value
        this.description = document.getElementById('new-desc').value

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