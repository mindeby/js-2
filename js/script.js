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

showPage(studentList, 2) //call the function

// add pagination links

const addPaginationLinks = (list) => {
  let numberOfButtons = Math.ceil(list.length / itemsPerPage);
  let htmlDiv = document.getElementsByClassName('page')[0]; //get the div with the class of .page to add buttons to the bottom

  for (i = 0; i < numberOfButtons; i++) {
    let button = document.createElement('BUTTON');
    htmlDiv.appendChild(button)
    button.innerText = `${i+1}` //add numbers to buttons
  }

};

addPaginationLinks(studentList)


/*<!-- pagination HTML to create dynamically -->
<div class="pagination">
  <ul>
    <li>
      <a class="active" href="#">1</a>
    </li>
     <li>
      <a href="#">2</a>
    </li>
     <li>
      <a href="#">3</a>
    </li>
     <li>
      <a href="#">4</a>
    </li>
     <li>
      <a href="#">5</a>
    </li>
  </ul>
</div>
<!-- end pagination -->*/
