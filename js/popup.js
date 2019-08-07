const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

const close = document.querySelector('.popup-close');

button.addEventListener('click', () =>{
    console.log('You clicked me');
    popup.style.display = 'block';
});

close.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

popup.addEventListener('click', e =>{
    //e.target.log(e.target);
    if(e.target.className === 'popup-wrapper'){
        //console.log('this is a popup-wrapper');
        popup.style.display = 'none';
    }
});