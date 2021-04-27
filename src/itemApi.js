class itemApi {
    static itemUrl = "http://localhost:3000/items"

    static grabItems(){
        fetch(this.itemUrl)
        .then(resp => resp.json())
        .then(resp => {
            resp["data"].forEach(item => {
                const newI = new Item({id: item.id, ...item.attributes})
                
                newI.addToList()
            })
        })
    }

    static editItem(item){
        const formData = {
            name: item.name,
            price: item.price,
            description: item.description
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

}