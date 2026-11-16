let sidebar = document.getElementById("sidebar")
let content = document.getElementById("content")
let toogle_sidebar = document.getElementById("sidebar-toogle")

toogle_sidebar.addEventListener("click",() => {
let sidebarRight = window.getComputedStyle(sidebar).right;

if(window.innerWidth > 767) {

if (sidebarRight === "0px" ) {
sidebar.style.right = "-250px";
content.style.marginRight="0px";

} else {
    sidebar.style.right = "0px";
    content.style.marginRight = "250px";
} 
} else {
    if (sidebarRight === "0px" ) {
        sidebar.style.right = "-250px";
        content.style.marginRight = "0px"; 
    } else {
        sidebar.style.right = "0px";
         content.style.marginRight = "0px"; 
    }
   }
});




//blog ---------------
//display blog notes 
let notescontainerblog = document.getElementById('notes-container-blog');
let notesareablog = document.getElementById('notes-area-blog');
notescontainerblog.addEventListener("click", function() {
    notesareablog.style.display = notesareablog.style.display === "block" ? "none" : "block";

});
//display blog messages 

let messagescontainerblog = document.getElementById('messages-container-blog');
let messagesareablog = document.getElementById('messages-area-blog');
messagescontainerblog.addEventListener("click", function() {
    messagesareablog.style.display = messagesareablog.style.display === "block" ? "none" : "block";
// display notes list 
});

//display blog bells 

let bellscontainerblog = document.getElementById('bells-container-blog');
let bellsareablog = document.getElementById('bells-area-blog');
bellscontainerblog.addEventListener("click", function() {
bellsareablog.style.display = bellsareablog.style.display === "block" ? "none" : "block";

});