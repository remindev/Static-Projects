function closeFooter(){
    // uses to close and open footer 

    let footer = document.getElementById("footer-footer"); // gets footer main element
    let img = document.getElementById("footer-footer-img"); // gets footer button arrow

    img.classList.toggle("on"); // toggles ' on ' at class property
    footer.classList.toggle("on"); // toggles ' on ' at class property

}