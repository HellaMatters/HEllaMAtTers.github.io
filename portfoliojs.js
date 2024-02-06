const activeImage = document.querySelector("#big-window img");
const galleryImages = document.querySelectorAll(".side-gallery img");

function changeImage(e) {
    activeImage.src = e.target.getAttribute("data-og-size-img-src");
}

galleryImages.forEach(image => image.addEventListener("click", changeImage));
//side-gallery image to big-window


//-------toggle little "tab", "menu" or "window" when you click and closes when you click again:
//const navItem = document.querySelector('a.toggle-nav');

//function toggleNavigation(){
    //this.nextElementSibling.classList.toggle('active');
  //}
//navItem.addEventListener('click', toggleNavigation);--------


filterSelection("all") //excutes function and keeps "anim" displayed as default
                        //anim is set as default below, as well(?)(? not sure..)
function filterSelection(c){
  var x, i;
  x = document.getElementsByClassName("gallery-cat");
  if (c == "all") c ="";

//Add the "show" class (display:block) to the filtered elements,
// and remove the "show" class from the elements that are not selected
for (i = 0; i < x.length; i++){
  RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c)>-1) AddClass(x[i], "show");
}
}

//Show filtered elements
function AddClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
          element.className += " " + arr2[i];
        }
    }
}

//Hide elements that are not selected
function RemoveClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++){
    while (arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//Add active class to current button (""highlight it"")
var btnContainer = document.getElementById("navbar-list");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

  });
}

//SIDENAV & about PUSH content (notanimated)
function openNavAbout(){
  document.getElementById("sidenav-about").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNavAbout(){
  document.getElementById("sidenav-about").style.width ="0";
  document.getElementById("main").style.marginLeft = "0";
}
