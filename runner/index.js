
const {add, update, updateMany, display,remove} = require("../controller/bookController.js");



//call function for adding

let newInfo = {
    title :"we are lost",
    author : "steven",
    year : 2000
}

add(newInfo);



// call function for updating

update(2,"title", "Harper");


// call function for updating many

let newInfo2 = {
   title : "crud" ,
   year : "1990"

}
updateMany(3,newInfo2);

// call function for displaying
 display();

 //call function for remove

 remove (4)
