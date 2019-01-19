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

//navigation
let href = nav.querySelectorAll("a[href]").forEach(elem=> {
  //Im not even sure if thats a good practice to refresh the page on clicking on a brand name/logo
  //but it seemed as a better idea than doing the same thing as clicking on 'Home' does
  if(elem.id==="brand"){
    elem.addEventListener("click", function(e){
      e.preventDefault();
      window.location.reload();
    })
  } else if (elem.getAttribute('href')==="#navi"){
    elem.addEventListener("click", function(e){
      e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }

  elem.addEventListener('click', moveTo)

  function moveTo(e){
    e.preventDefault();
    document.querySelector(elem.getAttribute('href')).scrollIntoView({behavior: 'smooth', block: 'start'});
  }
})

//scroll to top of the page on reloading
window.onbeforeunload = ()=> {
  window.scrollTo(0, 0);
}

//showing the name of the added file
const showFile = document.querySelector('input[type=file]')
showFile.addEventListener("change", function(){
  document.querySelector('#fileName').textContent = showFile.files[0].name
})

//submitting the form
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
                    <a href="img/12.jpg" target="_blank" class="btn">Download</a>
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
