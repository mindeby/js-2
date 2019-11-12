/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


let studentList = document.querySelectorAll('li'); //each studen is an li in the index.html

let itemsPerPage = 10;



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

showPage(studentList, 6) //call the function

// add pagination links

const addPaginationLinks = (list) => {
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
    link.classList.add("active")
    li.appendChild(link)
    newUl.appendChild(li)
    link.innerText = `${i+1}` //add numbers to a tags
  }

  let links = document.querySelectorAll('a')

  for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
      for (i = 0; i < links.length; i++) {
       links[i].classList.remove('active')
      }
      event.target.classList.add('active')
    });
  }

};

addPaginationLinks(studentList) //call the function
