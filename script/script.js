//scrolling effect for nav items
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

const submit = nav.querySelector("[href='#submitPic']");
submit.addEventListener("click", function(e){
  e.preventDefault();
document.querySelector('#submitPic').scrollIntoView({behavior: 'smooth', block: 'start'})
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

//showing the name of the added file
const showFile = document.querySelector('input[type=file]')
showFile.addEventListener("change", function(){
  document.querySelector('#fileName').textContent = showFile.files[0].name
})

//sumitting the form
const submitPic = document.querySelector('#submitPic')
submitPic.addEventListener('click', function(e){e.preventDefault()
//HTML required attribute doesnt work so Im doing the validation manually
if (document.querySelector('#picTitle').value && document.querySelector('#picDescription').value && showFile.files[0]){
  const url = URL.createObjectURL(showFile.files[0])
  const newDiv = document.createElement('div')
  newDiv.className = 'col-md-4 mb-4'
  newDiv.innerHTML = `<div class="card">
                  <img class="card-img-top" src="${url}" alt="Picture added by a user">
                  <div class="card-body">
                    <h5 class="card-title">${document.querySelector('#picTitle').value}</h5>
                    <p class="card-text">${document.querySelector('#picDescription').value}</p>
                    <a href="${url}" target="_blank" class="btn">Download</a>
                  </div>
                </div>
              </div>`
    const gal = document.querySelector('#gallery')
    gal.querySelector('.row').append(newDiv)
    document.querySelector('form').reset()
    document.querySelector('#fileName').textContent = "Choose file"
  } else {alert("All fields required!")}
})
console.log("If your recently added picture doesn't want to open in a new tab after clicking on 'download' button, try disabling your AdBlock")
