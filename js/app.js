'use strict';

// ================================
// ========VARIABLES===============
// ================================
// namesOfProducts []; // names of the products
// productObject {}; // object to store the product objects
// timesClicked; // number of times a product has been clicked
// timesShown; // number of times a product has been shown
// currentProducts []; // current products array
// previousProducts []; // previous products array
// userClicks; // number of times the user has clicked
// maxClicks; // total number of clicks the user is allowed
// var ____ = document.getElementById(''); // parent element on index where the images will be displayed
// var ___ = document.creteElement(''); // create list element to display results list on index


// ================================
// ========CONSTRUCTOR=============
// ================================
// * ### Have a product object constructor that contains:
// * Product name
// * image
// * Times clicked
// * Times shown

//function Product (some variable for the product name) {
  // set name;
  // set image;
  // set timesShown = 0;
  // set timesClicked = 0;
//}

// * These product objects will be stored in an object that will use the product name as the key


// ================================
// ========FUNCTIONS===============
// ================================
// * function to step through the product names array and call the constructor to create the object
//function createProductObjects () {
  //for (the length of the names array) {
    // create each product object and put it in the productObject {}
  //}
//}


// * Make a function to choose a random image
// function generateRandomProduct () {
//   some variable = lots of math including .random(), .floor(), and array.length
//   return some variable;
// }

// * Each set of images should contain no duplicates so make an array to hold current images to ensure that each image chosen at random doesn't duplicate within its group

// * Each set should have 3 different images from the previous set of images

// * Function to handle comparison of randomly generated image to images in current array and a function to compare to previous array. This will be done using an if/else statement to first check against any in current array then also in previous array. If it matches any in either array, a call will be put in to the random image generator function to get new image and comparison will start all over. If it doesn't match any in current or previous array, it will be pushed into current array.
// function checkCurrent (variable) {
//   if (it matches something in the current array) {
//     then generateRandomProduct() for new random image
//   } else {
//     call checkPrevious(variable);
//   }
//   set in currentProducts[];
// }

// function checkPrevious(variable) {
//   if (it matches something in previous array) {
//     then generateRandomProduct() for new random image
//   } else {
//     return variable;
//   }
// }


// * Function to update number of times an image is shown
// function updateTimesShown (timesShown) {
//   timesShown++;
//   return timesShown;
// }


// * Function to render array of current images to screen
// function renderImages (namesOfProducts) {
//   variable, create image element
//   // set image attributes; they're not all the same file extension
//   if (usb) {
//     set image source to have .gif
//   } else if (sweep) {
//     set image source to have .png
//   } else {
//     set image source to have .jpg
//   }
//   set image id
//   append it to the parent element
// }


// Function to set up the list to display the results
// function setUpList () {
//   set the parent element by getting element by id from index
//   append the list to the parent element
//
//   step through the productObject to pull out each product and its properties
//   for (keys in productObject) {
//     some variable1 to hold each products name and properties
//     some variable2 to create the li element to hold variable1 s data
//     set variable2 s text content to be variable1
//     append variable2 as child to parent element
//   }
// }


// =====================================
// =CLICK HANDLER AND RELATED FUNCTIONS=
// =====================================
// * ### ClickHandler function to handle clicking of image and record:
// * For each image clicked, call function to update the number of times it has been clicked.
// * Call function to update number of times a user has clicked to choose an image
// * Call function to set previous images array = current images array
// * Call function to clear current array
// * Call function to check if number of user clicks < max clicks
// * Call function to clear image set if it is < max clicks
// * Then repeat the process of generating 3 new images
// * If user clicks !< max clicks, remove event handler
// * Then call function to render results list
