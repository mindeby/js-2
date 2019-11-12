let studentList = document.querySelectorAll('li');

let itemsPerPage = 10;


const paginate = (list, itemsPerPage) => {

  for (i = 0; i < list.length; i++) {
    list[i].style.display = "none";
  }

  let pages = Math.ceil(list.length / itemsPerPage);
  let pageButtons = [];
  let startingItems = [];
  let endingItems = [];

  for (i = 0; i < pages; i++) {
    let button = document.createElement("BUTTON");
    pageButtons.push(button);
    button.addEventListener("click", function(){
      let startIndex = 0;
      let endIndex = 0;
      for (i = 0; i <= pages; i++) { //for every page
        if (i == (pages - 1)){ //if it is the last page just show the remaining items and not amount of itemsPerPage
        endIndex += itemsPerPage - (endIndex - list.length + itemsPerPage)
        } else {
          if ( i == 0){ //if it's the first page the starting index is 0 and the endIndex is (itemsPerPage - 1)
          startIndex = 0;
          endIndex -= 1
          } else {
          startIndex = endIndex + 1; //otherwise the endIndex is always startIndex + 1
          }
          endIndex += itemsPerPage;
          startingItems.push(startIndex)
          endingItems.push(endIndex)
        }
      }
      console.log(startingItems)
      console.log(endingItems)
    });
  }



  let divText = document.getElementsByClassName('page')[0]; //get the div with the class of .page to add buttons to the bottom

  for (i = 0; i < pageButtons.length; i++) { //add each button created previously
    divText.appendChild(pageButtons[i])
    pageButtons[i].innerText = `${i+1}` //add numbers to buttons
  }
};


paginate(studentList, itemsPerPage)
