const itemUrl = "http://localhost:3000/items"
const listCont = document.getElementById('item-list')

function grabItems(){
    fetch(itemUrl)
    .then(resp => resp.json())
    .then(resp => {
        resp["data"].forEach(item => {
            const li = document.createElement('li')
            li.innerText = `${item.attributes.name} - $${item.attributes.price}`

            listCont.appendChild(li)
        })
    })
}