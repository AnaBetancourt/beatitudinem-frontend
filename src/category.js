class Category {
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name

        Category.all.push(this)
    }

    allItems(){
        return Item.all.filter(item => parseInt(item.category_id) === parseInt(this.id))
    }

    addToDropdown(){
        const newOption = document.createElement('option')
        newOption.value  = this.id 
        newOption.innerText = this.name
        document.getElementById('dropdown').append(newOption)
    }

}