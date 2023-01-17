


  let contact = document.querySelector('.form__input')
  let chat = document.querySelector('.msg')
  let button = document.querySelector('.click')
 let toogle = document.querySelector('.toogle')
 let list = document.querySelector('.ref')
document.addEventListener('DOMContentLoaded',(e)=>{
  e.preventDefault()
    let user = 'welcome to The Building Expert Platform Book a session with us'
    alert(user)
  

   button.addEventListener('click',(e)=>{
     e.preventDefault()
     
   })
   toogle.addEventListener('click',()=>{
     list.classList.toggle('dave')
   })
 
})