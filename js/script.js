/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 


   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const listItems = document.querySelector(' .student-list').children; //var for storing student list items
const itemsPerPage = 10; //var for storing items per page (10)


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage = (list, page) => { //function to hide all items in list except the ten intended to show.
   let startIndex = (page * itemsPerPage) - itemsPerPage; //var for storing start index of items to be displayed on given page
   let endIndex = page * itemsPerPage; //var for storing end index of items to be displayed on given page
 }

for (let i = 0; i < list.length; i++) { //looping over items in list parameter
   if (i >= startIndex && i < endIndex) { // if index of list item is >= index of first item, display on the page
      list[i].style.display = '';
   } else {
      list[i].style.display = 'none'; //otherwise display none
      }
   }
  
showPage(listItems, 1); //list items to be displayed on page 1

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***




// Remember to delete the comments that came with this file, and replace them with your own code comments.