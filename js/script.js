/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


let studentNames = document.querySelectorAll('H3');

let studentList = document.querySelectorAll('li'); //each student is an li in the index.html

let itemsPerPage = 10;


for (i = 0; i < studentNames.length; i++) {
 studentNames[i].style.textTransform ="capitalize"; //Just capitalizing the names of the students
}


const showPage = (list, page) => { //function to show the page we want

  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = page * itemsPerPage -1;

  for (i = 0; i < list.length; i++) {
    list[i].style.display = 'none';
    if (i >= startIndex && i <= endIndex ) {
      list[i].style.display = 'block';
    }
  }
};


// add pagination links

const addPaginationLinks = (list) => {
  removeElementsByClass('pagination') //remove old elements every time you start running the function
  let numberOfButtons = Math.ceil(list.length / itemsPerPage);
  let htmlDiv = document.getElementsByClassName('page')[0]; //get the div with the class of .page to add buttons to the bottom
  let newDiv = document.createElement('DIV');
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

    if ( i == 0) {
    link.classList.add("active")
    }

  }

  let links = document.querySelectorAll('a')

  for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
      for (i = 0; i < links.length; i++) {
       links[i].classList.remove('active')
      }

      event.target.classList.add('active')
      showPage(studentList, event.target.innerText) //call the function

    });
  }
};


showPage(studentList, 1) //call the function
addPaginationLinks(studentList) //call the function


function removeElementsByClass(className){ //function to remove the old pagination links when the functions are called
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

//For the Extra Credit

// Add search component
let headerDiv = document.getElementsByClassName('page-header')[0]; //get the div with the class of .page to add buttons to the bottom
let searchBar = document.createElement('DIV')
let searchBox = document.createElement('INPUT')
let searchButton = document.createElement('BUTTON')
searchBar.classList.add("student-search")
stylingElements(searchButton)
searchButton.style.backgroundColor="#4ba6c3"; //aditional button styling
searchButton.style.color="#fff"; //aditional button styling
stylingElements(searchBox)
searchBox.style.marginRight="5px"; //aditional search box styling
headerDiv.appendChild(searchBar)
searchBar.appendChild(searchBox)
searchBar.appendChild(searchButton)
searchBox.setAttribute("placeholder", "Search for students...")
searchButton.innerText = "Search"

const findMatches = () => {
  let search = searchBox.value.toLowerCase();
  let results =[]
  removeElementsByClass('no_results') //remove old paragraphs
  for (i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
    if (studentList[i].innerText.indexOf(search) !== -1) {
      results.push(studentList[i])
    }
  }
  showPage(results, 1)
  addPaginationLinks(results)

  if (results.length == 0) { //if there are no matches
    removeElementsByClass('no_results') //remove old paragraphs
    let parent = document.getElementsByClassName('page-header')[0]; //create a new paragraph for the message
    let newP = document.createElement('P');
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


function stylingElements(element){ //function to style the button and search bar
  element.style.borderRadius="5px";
  element.style.border="1px solid #eaeaea";
  element.style.padding="8px 15px";
  element.style.fontSize="14px";
}
