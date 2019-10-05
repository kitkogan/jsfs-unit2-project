/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// Create global variables

const listItems = document.querySelectorAll('.student-item'); //var for storing student list items in student list
const numPerPage = 10; //var for storing number of items to show on each page (10)

// Create 'showPage function' to hide all students except for the 10 intended to display

const showPage = (list, page) => { //two params: 'list' reps actual list of students & 'page' reps page number
   const startStudentIndex = (page * numPerPage) - numPerPage; //var for storing start index of items to be displayed on given page
   const endStudentIndex = page * numPerPage; // var for storing end index of items to be displayed on given page

   for (let i = 0; i < list.length; i += 1){ //loop over 'list' param
      if (i >= startStudentIndex && i < endStudentIndex){ //display any list item with index <= to startStudentIndex AND > than endStudentIndex var
         listItems[i].style.display = 'block'; //determines how to handle content based on given rules (hide or display)
      } else {
         listItems[i].style.display = 'none'; 
         
      }   
   } 
}

showPage(listItems, 1); // 'showPage' function called

const page = document.querySelector('.page'); // returns first 'page' element that matches .page class
   const div = document.createElement('div'); //creates 'div' element to be added to DOM
   div.className = ('pagination'); //container div element with class name 'pagination'
   page.appendChild(div); // 'page' appended to div element
 
//function to create, append, and add functionality to pagination links

const appendPageLinks = (list) => { 
   div.innerHTML = ''; 
   const numOfPages = Math.ceil(list.length / numPerPage); 
   const ul = document.createElement('ul'); 
   for (let i = 0; i < numOfPages; i += 1) { 
      const li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
      const pageAmount = a.textContent = i + 1; // text set to page num each link will show
      li.appendChild(a); 
      ul.appendChild(li); 
      div.appendChild(ul); 

      ul.firstElementChild.firstElementChild.className = 'active'; // initial 'active' class added to first pagination link

      // 'click' event listener added to each element
      a.addEventListener('click', (event) => { 
         for(let i = 0; i < ul.children.length; i++) { //when a pagination link is clicked, 'active' class name should be added to link clicked
           ul.children[i].firstElementChild.className = '';
         }
         event.target.className = 'active'; // target property evenet object
         showPage(listItems, pageAmount); // function to show a page called, var for listItems (global) as well as page number passed in as arguments
       }
      );
   }
} 

appendPageLinks(listItems); // appendPageLinks function called

// create search bar
const pageHeader = document.querySelector('.page-header'); 
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
const input = document.createElement('input');
input.placeholder = 'Search for students...';
const button = document.createElement('button');
button.textContent = 'Search';

searchDiv.appendChild(input);
searchDiv.appendChild(button);
pageHeader.appendChild(searchDiv);



// searchBar function: accept queryEntry, scan for matches, if match occurs show result, if no match occurs show none
const searchBar = (searchInput, studentList) => {
     const queryEntry = searchInput.value.toUpperCase();
     const queryResults = [];
     
     studentList.forEach(item => {
     const queryText = item.children[0].children[1].textContent.toUpperCase()
     
     if (studentMatch(queryEntry, queryText)){
      item.style.display = 'block';
      queryResults.push(item);   
   } else {
      item.style.display = 'none';        
   } 
     
   })

   // create "no results found" message div container
   const message = document.createElement('div');
   const h3 = document.createElement('h3');
   message.appendChild(h3);
   page.appendChild(message);

   // queryResults scanned, determines whether "no results found" message will be triggered
   if (queryResults.length == 0) {
      div.innerHTML='';
      message.textContent = 'Sorry, no results matched your search';
   }
   else {
      appendPageLinks(queryResults);

   }

   }

   // studentMatch function: takes queryEntry and scans index for matches
   const studentMatch = (queryEntry, queryText) => {
     if (queryEntry.length >= 0) {
   return queryText.indexOf(queryEntry) >= 0;
     }
     return false
     
   }
   

 
// Event listener search triggered by typing 
input.addEventListener('keyup', () => {
searchBar(input, listItems);

});

// Event Listener triggered by clicking search button
button.addEventListener('click', () => {
searchBar(input, listItems);

});

// Function to tell "refresh" button to reload/refresh webpage, as deleting search box entry does not seem to accomplish this
const refreshPage = () => {
   window.location.reload();
} 