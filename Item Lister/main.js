const form = document.querySelector("#addform");
//This gets the form

const itemList = document.querySelector("#items");
//this gets the ul

const filter = document.querySelector("#filter");
//this gets the Lis

const tryThis = document.querySelector(".trick");
//gets the second h2 element

//The form submit event
form.addEventListener("submit", addItems);
//gets the form and create a submit event

//add item function
function addItems(e){
    e.preventDefault();

    //Get value from text button
    let newItem = document.getElementById("item");

    //create a new Li
    let li = document.createElement("li")

    //add a class
    li.className = "list-group-item mb-2"

    //append the value of what is written
    li.appendChild(document.createTextNode(newItem.value));

    itemList.appendChild(li)

    //create a delete icon for the new Lis
    let deletBtn = document.createElement("button")

    //add class to the delete button
    deletBtn.className = "btn1 btn-danger btn-sm float-right delete"
    deletBtn.appendChild(document.createTextNode("X"))

    //add the delete button to the New Li
    li.appendChild(deletBtn);
}

//Remove item from Ul when X is clicked
itemList.addEventListener("click", removeItem)

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement //the Ul
            itemList.removeChild(li)
        }
    }
}

//Filtering The Items
//Add event listener to the search bar

filter.addEventListener('keyup', filterItems);

function filterItems(e){
    let text = e.target.value.toLowerCase();

    //Grab all the Lis
    let lists = itemList.querySelectorAll('li')

    //change from nodelist to array

    Array.from(lists).forEach(function(item){
        let itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = "block"
            } else {
                item.style.display = "none"
            }
        });
}