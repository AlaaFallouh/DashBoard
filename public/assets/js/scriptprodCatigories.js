
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
let notescontainerprodcat = document.getElementById('notes-container-prodcat');
let notesareaprodcat = document.getElementById('notes-area-prodcat');
notescontainerprodcat.addEventListener("click", function() {
    notesareaprodcat.style.display = notesareaprodcat.style.display === "block" ? "none" : "block";

});
//display prod messages 

let messagescontainerprodcat = document.getElementById('messages-container-prodcat');
let messagesareaprodcat = document.getElementById('messages-area-prodcat');
messagescontainerprodcat.addEventListener("click", function() {
    messagesareaprodcat.style.display = messagesareaprodcat.style.display === "block" ? "none" : "block";
// display notes list 
});

//display prod bells 

let bellscontainerprodcat = document.getElementById('bells-container-prodcat');
let bellsareaprodcat = document.getElementById('bells-area-prodcat');
bellscontainerprodcat.addEventListener("click", function() {
bellsareaprodcat.style.display = bellsareaprodcat.style.display === "block" ? "none" : "block";

});





new DataTable('#example2', {
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


// $(document).ready(function() {
//     $('.js-example-basic-multiple').select2({
//         tags:true , 
//         maximumSelectionLength: 4
//     });
// });

// On the shared list component across all pages:
// const params = new URLSearchParams(window.location.search);
// const selectedId = params.get('selected');

// document.querySelectorAll('.list-item').forEach(item => {
//   // Highlight the item if it matches the URL parameter
//   if (item.dataset.id === selectedId) {
//     item.classList.add('active');
//   }

  // When clicked, open the target page and pass its ID
//   item.addEventListener('click', () => {
//     const targetPage = item.dataset.href; // e.g., "page2.html"
//     window.location.href = `${targetPage}?selected=${item.dataset.id}`;
//   });
// });