let sidebar = document.getElementById("sidebar")
let content = document.querySelector("#content")
let toogle_sidebar = document.querySelector("#sidebar-toogle")

toogle_sidebar.addEventListener("click",() => {
let sidebarWidth = window.getComputedStyle(sidebar).width;
if (sidebarWidth == "250px" ) {
sidebar.style.width = "0";
content.style.marginRight="0";

} else {
sidebar.style.width = "250px";
content.style.marginRight = "250px";
}


});


