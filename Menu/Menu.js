/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const menuBar = document.querySelector('.header');
menuBar.appendChild(createMenuComponent(menuItems));

function createMenuComponent(menuItems) {
  //creating Elements
  const menu = document.createElement('div');
  const ul = document.createElement('ul');
  // const li1 = document.createElement('li');
  // const li2 = document.createElement('li');
  // const li3 = document.createElement('li');
  // const li4 = document.createElement('li');
  // const li5 = document.createElement('li');
  // const li6 = document.createElement('li');
  
  // //appending
  menu.appendChild(ul);
  // ul.appendChild(li1);
  // ul.appendChild(li2);
  // ul.appendChild(li3);
  // ul.appendChild(li4);
  // ul.appendChild(li5);
  // ul.appendChild(li6);
  menu.classList.add('menu')

  menuItems.forEach(menuItem => {
    const listItem = document.createElement('li');
    ul.appendChild(listItem);
    listItem.textContent = menuItem;
    //menuBar.appendChild(createMenuComponent(menuItem))  
  });
  

  //add text
  //li1.textContent =

  return menu;
}


