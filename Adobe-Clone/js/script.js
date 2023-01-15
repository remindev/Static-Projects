
let titleHome = document.getElementById("Title-HOME");

window.onscroll = function (e) {

   // print "false" if direction is down and "true" if up

   titleHome.style.top= "-80px";

    if (this.oldScroll > this.scrollY) {

      titleHome.setAttribute("class","home-title yup");

    }else{

      titleHome.setAttribute("class","home-title");

    }

    this.oldScroll = this.scrollY;
}
