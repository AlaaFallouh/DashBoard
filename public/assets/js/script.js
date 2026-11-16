
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








let messagescontainer = document.getElementById('messages-container');
let messagesarea = document.getElementById('messages-area');
messagescontainer.addEventListener("click", function() {
    messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block";

});

let notescontainer = document.getElementById('notes-container');
let notesarea = document.getElementById('notes-area');
notescontainer.addEventListener("click", function() {
    notesarea.style.display = notesarea.style.display === "block" ? "none" : "block";
//display bells 
});
let bellscontainer = document.getElementById('bells-container');
let bellsarea = document.getElementById('bells-area');
bellscontainer.addEventListener("click", function() {
    bellsarea.style.display = bellsarea.style.display === "block" ? "none" : "block";

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

// On the shared list component across all pages:
const params = new URLSearchParams(window.location.search);
const selectedId = params.get('selected');

document.querySelectorAll('.list-item').forEach(item => {
  // Highlight the item if it matches the URL parameter
  if (item.dataset.id === selectedId) {
    item.classList.add('active');
  }

  // When clicked, open the target page and pass its ID
  item.addEventListener('click', () => {
    const targetPage = item.dataset.href; // e.g., "page2.html"
    window.location.href = `${targetPage}?selected=${item.dataset.id}`;
  });
});