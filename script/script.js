const nav = document.querySelector('nav');

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY >= nav.offsetHeight) {
        nav.classList.add('movedNav')
        nav.classList.remove('staticNav')
    } else {
        nav.classList.remove('movedNav')
        nav.classList.add('staticNav')
    }
});

const gallery = nav.querySelector("[href='#gallery']");
gallery.addEventListener("click", function(e){
  e.preventDefault();
document.querySelector('#gallery').scrollIntoView({behavior: 'smooth', block: 'start'})
})

const home = nav.querySelector("[href='#navi']");
home.addEventListener("click", function(e){
  e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
})

const brand = document.querySelector('#brand')
brand.addEventListener("click", function(e){
  e.preventDefault();
  window.location.reload();
})

window.onbeforeunload = ()=> {
  window.scrollTo(0, 0);
}
