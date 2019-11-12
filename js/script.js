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

let studentList = document.querySelectorAll('li'); //each studen is an li in the index.html

let itemsPerPage = 10;

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

let startIndex = 0;
let endIndex = 0;

const paginate = (list, itemsPerPage) => {
  let pages = Math.ceil(list.length / itemsPerPage); //we need to round it up to create a new page even if just for a few items
  for (i = 0; i < pages; i++) {
  if (i == (pages - 1)){ //if it is the last page just show the remaining items
      endIndex += itemsPerPage - (endIndex - list.length + itemsPerPage)
    } else {
      if ( i == 0){ //if it's the first page the startind index is 0 and the endIndex is itemsPerPage - 1
        startIndex = 0;
        endIndex -= 1
      } else {
        startIndex = endIndex + 1;
      }
      endIndex += itemsPerPage;
    }
    console.log("the starting index is " + startIndex + " and the ending index is " + endIndex )
  }
};

paginate(studentList, itemsPerPage)


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
