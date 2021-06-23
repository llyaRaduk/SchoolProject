

document.querySelector('.menu__box').onclick = function(event) {
    
    event.target.nextSibling.nextSibling.firstChild.nextSibling.classList.toggle('open');
  
};
/* let arr = document.querySelectorAll('.dropdown_content_burger');

arr.forEach(function(item, i){
    item.classList.add(i+1);
}); */