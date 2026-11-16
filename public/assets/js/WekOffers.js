
let sidebar = document.getElementById("sidebar")
let content = document.querySelector("#content")
let toogle_sidebar = document.querySelector("#sidebar-toogle")

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



//product ---------------
//display prod notes 
let notescontainerprod = document.getElementById('notes-container-prod');
let notesareaprod = document.getElementById('notes-area-prod');
notescontainerprod.addEventListener("click", function() {
    notesareaprod.style.display = notesareaprod.style.display === "block" ? "none" : "block";

});
//display prod messages 

let messagescontainerprod = document.getElementById('messages-container-prod');
let messagesareaprod = document.getElementById('messages-area-prod');
messagescontainerprod.addEventListener("click", function() {
    messagesareaprod.style.display = messagesareaprod.style.display === "block" ? "none" : "block";
// display notes list 
});

//display prod bells 

let bellscontainerprod = document.getElementById('bells-container-prod');
let bellsareaprod = document.getElementById('bells-area-prod');
bellscontainerprod.addEventListener("click", function() {
bellsareaprod.style.display = bellsareaprod.style.display === "block" ? "none" : "block";

});





new DataTable('#example9', {
    responsive: true,
	buttons: [
        {
            extend: 'copy',
            text: 'نسخ'
        },{
              extend: 'excel',
              text:'تحويل الى اكسل'
        },{
             extend: 'pdf',
             text:'تحويل الى Pdf'
             
        },{
             extend: 'print',
             text:'طباعة'
        },
        
       ],
	layout: {
		topStart: 'buttons'
	}
});



