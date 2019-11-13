/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// I created only two global variables for my functions
let studentList = document.querySelectorAll('li'); //each student is an li in the index.html

let itemsPerPage = 10;



//Just capitalizing the names of the students
let studentNames = document.querySelectorAll('H3');

for (i = 0; i < studentNames.length; i++) {
 studentNames[i].style.textTransform ="capitalize";
}


//



//function to show the page we want according to each starting and ending index
const showPage = (list, page) => { //takes as arguments any given list and which page we want to select

  let startIndex = (page * itemsPerPage) - itemsPerPage; //Ex: For Page 2 * 10 items per page = 20 - 10 items per Page means the starting index is 10
  let endIndex = page * itemsPerPage -1; //Ex: For Page 2 * 10 items per page = 20 - 1 items per Page means the ending index is 19

  for (i = 0; i < list.length; i++) {
    list[i].style.display = 'none'; //for as long as the list goes hide all the elements
    if (i >= startIndex && i <= endIndex ) {
      list[i].style.display = 'block'; //and only show back the ones in the range of the starting and ending indexes we want
    }
  }
};


// add pagination links

const addPaginationLinks = (list) => {
  removeElementsByClass('pagination') //remove old elements every time you start running the function so that we don't create endless elements
  let numberOfButtons = Math.ceil(list.length / itemsPerPage); //We need to round up the number of pages/buttons even if we don't get a full page
  let htmlDiv = document.getElementsByClassName('page')[0]; //get the div with the class of .page to add child elements to (in this case the buttons for the pagination links)
  let newDiv = document.createElement('DIV'); //creating and nesting elements to hold each pagination link in the webpage
  let newUl = document.createElement('UL');
  newDiv.classList.add("pagination")
  htmlDiv.appendChild(newDiv)
  newDiv.appendChild(newUl)

  for (i = 0; i < numberOfButtons; i++) {
    let li = document.createElement('LI');
    let link = document.createElement('A');
    link.setAttribute("href", "#");
    li.appendChild(link)
    newUl.appendChild(li)
    link.innerText = `${i+1}` //add numbers to a tags

    if ( i == 0) { //if it is the first/current page
    link.classList.add("active") //always starts with an "active" state, it's the page we're on
    }

  }

  let links = document.querySelectorAll('a')

  for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
      for (i = 0; i < links.length; i++) {
       links[i].classList.remove('active') //remove the active state for all the pagination links when any of them is clicked
      }

      event.target.classList.add('active') //but add it back to the selected pagination link
      showPage(studentList, event.target.innerText) //call the function taking the list items and setting the number of the page according to the text on the buttons

    });
  }
};


showPage(studentList, 1) //call the function
addPaginationLinks(studentList) //call the function


function removeElementsByClass(className){ //function to remove the old pagination links when the functions are called as a "restart"
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

//For the Extra Credit

// Add search component
let headerDiv = document.getElementsByClassName('page-header')[0]; //get the div with the class of .page to add child elements to (in this case the buttons for the pagination links)
let searchBar = document.createElement('DIV') //Creating new elements to the page
let searchBox = document.createElement('INPUT')
let searchButton = document.createElement('BUTTON')

//Styling of the elements created
searchBar.classList.add("student-search")
stylingElements(searchButton)
searchButton.style.backgroundColor="#4ba6c3"; //aditional button styling
searchButton.style.color="#fff"; //aditional button styling
stylingElements(searchBox)
searchBox.style.marginRight="5px"; //aditional search box styling
//


headerDiv.appendChild(searchBar) //Nesting created elements
searchBar.appendChild(searchBox)
searchBar.appendChild(searchButton)
searchBox.setAttribute("placeholder", "Search for students...")
searchButton.innerText = "Search"

const findMatches = () => { //function to find new matches on a certain event
  let search = searchBox.value.toLowerCase(); //search works even if input is in all caps
  let results =[] //create an array to store the matches
  removeElementsByClass('no_results') //remove old paragraphs we created every time we run the function

  for (i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none'; //hide every element on the list
    if (studentList[i].innerText.indexOf(search) !== -1) {
      results.push(studentList[i]) //unless they match the search, in that case push the item to the results array
    }
  }
  showPage(results, 1) //call function
  addPaginationLinks(results) //call function

  if (results.length == 0) { //if there are no matches
    removeElementsByClass('no_results') //remove old paragraphs  we created every time we run the function
    let parent = document.getElementsByClassName('page')[0]; //get the parent div
    let newP = document.createElement('P'); //create a new paragraph for the message
    newP.classList.add("no_results")
    parent.appendChild(newP)
    newP.innerText = "No results found"
    newP.style.marginTop = "50px";
  }
}


searchButton.addEventListener("click", function(){ //search when clicking button
  findMatches();
});

searchBox.addEventListener("keyup", function(){ //search on keyup
  findMatches();
});


function stylingElements(element){ //function to style the button and search box
  element.style.borderRadius="5px";
  element.style.border="1px solid #eaeaea";
  element.style.padding="8px 15px";
  element.style.fontSize="14px";
}
