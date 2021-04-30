class categoryApi{

    static catUrl = "http://localhost:3000/categories"

    static getCategories(){
        fetch(this.catUrl)
        .then(resp => resp.json())
        .then(resp => {
            resp["data"].forEach(category => {
                new Category({id: category.id, ...category.attributes})
            })
        })
    }

    static addCategories(){
        Category.all.forEach(category => category.addToDropdown())
    }
}