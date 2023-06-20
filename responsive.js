let ham = document.querySelector('#mainham')
let nav = document.querySelector('#nav')
let sec = document.querySelector('#sec')

ham.addEventListener('click',()=>{
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        sec.style.paddingTop  = '40px'
      }
    else {
        nav.style.display = 'block';
        sec.style.padding = '0'; // Set the padding to zero
      }
})  
