const nav = document.querySelector('nav'),
btn_nv = nav.querySelector("button._burger"),
btn_x = nav.querySelector("button.close")
navLeft = nav.querySelector(".nav-left"),
_menu = nav.querySelector("ul.main-menu");

btn_nv.addEventListener('click', function(){
  navLeft.classList.add('show');
  _menu.classList.add('right');
  _menu.classList.remove('left');
});

navLeft.addEventListener('click', function(x){
  if(x.target === btn_x || x.target === navLeft){
    setTimeout(()=>{
      navLeft.classList.remove('show');
    }, 750);
    _menu.classList.add('left');
    _menu.classList.remove('right');
  }
});
