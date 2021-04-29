class Category {
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name

        Category.all.push(this)
    }

    allItems(){
        return Item.all.filter((item) => item.categoryId === parseInt(this.id))
    }

}