/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// Create global variables

const listItems = document.querySelectorAll('.student-item'); //var for storing student list items in student list
const numPerPage = 10; //var for storing number of items to show on each page (10)

// Create 'showPage function' to hide all students except for the 10 intended to display

const showPage = (list, page) => { //two params: 'list' reps actual list of students & 'page' reps page number; both to be passed in as arguments when function is called 
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

showPage(listItems, 1); // 'showPage' function called, 'listItems' var (global) and '1' (repping first page) passed in as arguments

const page = document.querySelector('.page'); // returns first 'page' element that matches .page class
   const div = document.createElement('div'); //creates 'div' element to be added to DOM
   div.className = ('pagination'); //container div element with class name 'pagination'
   page.appendChild(div); // 'page' appended to div element
 
//function to create, append, and add functionality to pagination links

const appendPageLinks = (list) => { // One param: 'list' reps actual list of students to be passed in as argument when function is called
   div.innerHTML = ''; // create/append DOM elements for page links: 
   const numOfPages = Math.ceil(list.length / numPerPage); //var for calculating total number of pages
   const ul = document.createElement('ul'); // create 'ul' element
   for (let i = 0; i < numOfPages; i += 1) { // loop to take total number of pages and iterate appropriate number of times, creating correct amount of 'li' elements
      const li = document.createElement('li'); // each 'li' element contains 'a' element with 'href' attribute and '#' element; 
      let a = document.createElement('a');
      a.href = '#';
      const pageAmount = a.textContent = i + 1; // text set to page num each link will show
      li.appendChild(a); // 'li' appends to 'a'
      ul.appendChild(li); // 'ul' appends to 'li'
      div.appendChild(ul); // 'div' appends to 'ul'

      ul.firstElementChild.firstElementChild.className = "active" ; // initial 'active' class added to first pagination link

      // 'click' event listener added to each element
      a.addEventListener('click', (event) => { 
         for(let i = 0; i < ul.children.length; i++) { //when a pagination link is clicked, 'active' class name should be added to link clicked
           ul.children[i].firstElementChild.className = '';
         }
         event.target.className = 'active'; // target properrty evenet object
         showPage(listItems, pageAmount); // function to show a page called, var for listItems (global) as well as page number passed in as arguments
       }
      );
   }
} 

appendPageLinks(listItems); // 'appendPageLinks' function called, 'listItems' (global) passed in as argument

// create search bar
const searchBar = () => {
   const pageHeader = document.querySelector('.page-header');
   const createSearchDiv = document.createElement('div');
   createSearchDiv.className = 'student-search';
   const searchInput = document.createElement('input');
   searchInput.className = ('search-input');
   searchInput.placeholder = 'Search for students...';
   const searchButton = document.createElement('button');
   button.textContent = 'Search';
   PageHeader.appendChild(createSearchDiv);
   const pageHeaderChild = pageHeader.lastElementChild;
   pageHeaderChild.appendChild(searchInput);
   const targetSearchDiv = document.querySelector('.student-search');
   targetSearchDiv.appendChild(searchButton);
}

const noReturn = () => {
   const checkResults = document.querySelector('.no-result-returned');
   if (checkResults) {
      const ul = document.querySelector('.student-list');
      const li = ul.querySelector('.no-result-returned');
      ul.removeChild(li);
   }

const studentList = documentQuerySelector('.student-list');
const NoResultAdded = document.createElement('li');
NoResultAdded.className = '.no-result';
NoResultAdded.textContent = 'No result returned';
noResultAdded.style.display= '';
studentList.appendChild(noResultAdded);
}

button.addEventListener('click', (event) => {
   searchFunc(input, studentList);
   
   });

   input.addEventListener('keyup', () => {
      searchFunc(input, studentList);
   
   });
   
 appendSearchBar();