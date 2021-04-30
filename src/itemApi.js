class itemApi {
    static itemUrl = "http://localhost:3000/items"

    static grabItems = () =>{
        fetch(this.itemUrl)
        .then(resp => resp.json())
        .then(resp => {
            resp["data"].forEach(item => {
                new Item({id: item.id, ...item.attributes})
            })
        })
    }

    static editItem(item){
        const formData = {
            name: item.name,
            price: item.price,
            description: item.description,
            quantity: item.quantity
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(this.itemUrl + "/" + `${item.id}`, configObj)
        .then(resp => resp.json())
        .then(resp => {item.showFullDetails()})
    }

    static addItem = () =>{

        const formData = {
            name: document.getElementById('create-name').value,
            price: document.getElementById('create-price').value,
            quantity: document.getElementById('create-quantity').value,
            description: document.getElementById('create-desc').value,
            image_url: document.getElementById('create-img-url').value,
            category_id: document.getElementById('dropdown').value
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(this.itemUrl, configObj)
        .then(resp => resp.json())
        .then(resp => {
            const itemData = resp.data
            const newI = new Item({id: itemData.id, ...itemData.attributes})

            newI.addToList()
            formCont.innerHTML = `
                <button id="new-item">Add Item</button>
            `
        })
    }

}