// using getElementById
let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

// using querySelector
let addItem = document.querySelector('h2.title');
addItem.style.fontWeight = 'bold';
addItem.style.color = 'green';


// using getElementsByClassName
let items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';
for(let i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
}