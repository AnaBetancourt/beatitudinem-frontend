class itemApi {
    static itemUrl = "http://localhost:3000/items"

    static grabItems(){
        fetch(this.itemUrl)
        .then(resp => resp.json())
        .then(resp => {
            resp["data"].forEach(item => {
                // console.log(item)
                // debugger
                const newI = new Item({id: item.id, ...item.attributes})
                
                newI.addToList()
            })
        })
    }

}