var  mainImg =  document.getElementById('img1');
var allImg = document.querySelectorAll('.img');

allImg.forEach( (item) => {
    item.addEventListener('click', () => {
        mainImg.src = item.src
    })
})


var addNum = document.getElementById('count');
var cart = document.querySelectorAll('.count');

cart.forEach( (item) => {
    item.addEventListener('click', () => {
            addNum.innerHTML++
        
    })
})


var toggleBtn = document.getElementById('navBtn');
var link = document.querySelector('nav');


toggleBtn.addEventListener('click', () => {
    link.classList.toggle('drop')
})

