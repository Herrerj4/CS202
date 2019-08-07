
/* Events Basics ===================================  */
/* Events - action that the user/browser reacts to 
e.g. mouseover, mouseout, hover, click, dblclick, load, resize*/

/* function clickMe(){
    console.log('You clicked me');
} */

/* const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('You clicked me');
}); */

/* const items = document.querySelectorAll('li');

items.forEach(item =>{
    item.addEventListener('click', e =>{
        //console.log('item clicked');
        //console.log(e);
        //console.log(e.target);
        //console.log(item);
        //e.target.style.color = 'red';
        e.target.style.textDecoration = 'line-through';
    });
}); */



/* Creating and Removing Elements ===================================  */

/* const ul = document.querySelector('ul');

items.forEach(item =>{
    item.addEventListener('click', e =>{
        e.target.remove();
    })
}) */


/* Event Bubbling (and Delegation) ====================================== */

const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    const li = document.createElement('li');
    li.textContent = 'something new created';
    ul.appendChild(li);
})

ul.addEventListener('click', e =>{
    //console.log('event in ul');
    //console.log(e);
    if(e.target.tagName === 'Li'){
        e.target.remove();
    }
})

/* document.addEventListener('mousemove', e =>{
    // console.log(e);
    console.log(e.offsetX, e.offsetY);
}) */

document.addEventListener('copy', () =>{
    console.log('My content is copyrighted');
})

window.onload = () =>{
    document.addEventListener('contextmenu', e =>{
        e.preventDefault();
    });
}

// /* More DOM Events ====================================================== 














