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

const listItems = document.querySelectorAll('.student-item'); //var for storing student list items
const numPerPage = 10; //var for storing items per page (10)

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

const showPage = (list, page) => { // function to hide all items from student list except the ten intended to be displayed
   const startStudentIndex = (page * numPerPage) - numPerPage; //var for storing start index of items to be displayed on given page
   const endStudentIndex = page * numPerPage; // var for storing end index of items to be displayed on given page

   for (let i = 0; i < listItems.length; i += 1){
      if (i >= startStudentIndex && i < endStudentIndex){
         listItems[i].style.display = 'block';
      } else {
         listItems[i].style.display = 'none';
         
      }   
   } 
}

const page = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = ('pagination'); //container div element with class name 'pagination'
   page.appendChild(div); // ...and appended to div element
 
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


const appendPageLinks = (list) => { //function to create, append, and add functionality to pagination links
   div.innerHTML = '';
   const numOfPages = Math.ceil(list.length / numPerPage);
   const ul = document.createElement('ul');
   for (let i = 0; i < numOfPages; i += 1) {
      const li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
      const pageAmount = a.textContent = i + 1;
      li.appendChild(a);
      ul.appendChild(li);
      div.appendChild(ul);

      ul.firstElementChild.firstElementChild.className = "active" ;

   

   a.addEventListener('click', (event) => {
         for(let i = 0; i < ul.children.length; i++) {
           ul.children[i].firstElementChild.className = '';
         }
         event.target.className = 'active';
         showPage(listItems, pageAmount);
       }
      );
   }
} 
showPage(listItems, 1);
appendPageLinks(listItems);