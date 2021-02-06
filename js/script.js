const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector(".menu"),
      closeElem = document.querySelector(".menu__close"),
      closeOnOverlay = document.querySelector(".menu__overlay"),
      btn = document.querySelector('.promo__subtitle');
    //   link = document.querySelector('');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeOnOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.percent__number'),
      lines = document.querySelectorAll('.percent__scale span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


let i = 0;
const changeBtnElem = (e) => {
    e.target.style.color = `#96af80`;
    i++;
    if (i == 1) {
        btn.removeEventListener('click', changeBtnElem);
    }
};

btn.addEventListener('click', changeBtnElem);

//Отмена стандартного поведения браузера 
// link.addEventListener('click', function(event){ //call-back функция 
//     event.preventDefault();
    //и сюда пишем то, что мне хочется использовать для ссылок
// });