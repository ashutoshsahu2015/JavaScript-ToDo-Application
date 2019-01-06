
var addButton=document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton=document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

let ul=document.getElementById('list')
let li;
function addItem(){
    var input=document.getElementById('input')
    var item=input.value
    var textnode=document.createTextNode(item) 
    if(item==''){
        return false
        //Add a p tag and assign a value of "Enter your todo"
    }else {
        //Create li
        li=document.createElement('li')
        //Create checkbox
        var checkbox=document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check')

        var label=document.createElement('label')
        ul.appendChild(li)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        li.className='visual'
        input.value=''
    }
}
function removeItem(){
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}
