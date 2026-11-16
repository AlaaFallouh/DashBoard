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



//addpost ---------------
//display addpost notes 
let notescontaineraddpost = document.getElementById('notes-container-addpost');
let notesareaaddpost = document.getElementById('notes-area-addpost');
notescontaineraddpost.addEventListener("click", function() {
    notesareaaddpost.style.display = notesareaaddpost.style.display === "block" ? "none" : "block";

});
//display addpost messages 

let messagescontaineraddpost = document.getElementById('messages-container-addpost');
let messagesareaaddpost= document.getElementById('messages-area-addpost');
messagescontaineraddpost.addEventListener("click", function() {
    messagesareaaddpost.style.display = messagesareaaddpost.style.display === "block" ? "none" : "block";

});

//display addpost bells 

let bellscontaineraddpost = document.getElementById('bells-container-addpost');
let bellsareaaddpost = document.getElementById('bells-area-addpost');
bellscontaineraddpost.addEventListener("click", function() {
bellsareaaddpost.style.display = bellsareaaddpost.style.display === "block" ? "none" : "block";

});





// new DataTable('#example', {
//     responsive: true,
// 	buttons: [
//         {
//             extend: 'copy',
//             text: 'نسخ'
//         },{
//               extend: 'excel',
//               text:'تحويل الى اكسل'
//         },{
//              extend: 'pdf',
//              text:'تحويل الى Pdf'
             
//         },{
//              extend: 'print',
//              text:'طباعة'
//         },
        
//        ],
// 	layout: {
// 		topStart: 'buttons'
// 	}
// });


// $(document).ready(function() {
//     $('.js-example-basic-multiple').select2({
//         tags:true , 
//         maximumSelectionLength: 4
//     });
// });

