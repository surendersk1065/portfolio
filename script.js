

var infobut = document.getElementById("infobutton")
var linkbut = document.getElementById("linkbutton")
var resbut = document.getElementById("resbutton")

var contact = document.querySelector(".coninfo")
var links = document.querySelector(".link")
var resumes = document.querySelector(".resume")

infobut.addEventListener("click",function(event){
    event.preventDefault()
    contact.style.display = "block"
    links.style.display = "none"
    resumes.style.display = "none"
})

linkbut.addEventListener("click",function(event){
    event.preventDefault()
    contact.style.display = "none"
    links.style.display = "block"
    resumes.style.display = "none"
})

resbut.addEventListener("click",function(event){
    event.preventDefault()
    contact.style.display = "none"
    links.style.display = "none"
    resumes.style.display = "block"
})

var menubutton = document.querySelector(".menu")
var menulist = document.querySelector("nav ul")

menubutton.addEventListener("click",function(event){
    event.preventDefault()
    menulist.classList.toggle("showmenu")
})