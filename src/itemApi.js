class itemApi {
    static itemUrl = "http://localhost:3000/items"

    static grabItems(){
        fetch(this.itemUrl)
        .then(resp => resp.json())
        .then(resp => {
            resp["data"].forEach(item => {
                const newI = new Item({id: item.id, ...item.attributes, category_id: item.relationships.category.data.id})
                
                newI.addToList()
            })
        })
    }

}