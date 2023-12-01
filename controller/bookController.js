const {booksDatabase} = require("../db/books");


// the code below are for adding a new information 
 const add = (newInfo) => {
    id = booksDatabase.length+1;
    booksDatabase.push(newInfo);


    console.log("/n new information added /n");
    console.log(booksDatabase);
 }


// bellow are code for updating informations

const update = (id, key, value) =>{
      var exists = {};
      exists = booksDatabase.find(ele => ele.id===id);

      if(exists){
        exists[key] = value;
        console.log("information not found");
      }else{
        console.log("information not found");
      }

      console.log("/n information updated /n");
      console.log(exists);
}


// code for updating many information 
   
 const updateMany = (id,obj) => {

    var exists = {};
    exists = booksDatabase.find(ele=>ele.id===id);
 
    if(exists){
        for(key in obj) {
     exists[key] = obj[key];
    }
     console.log("information found");
        }else{
            console.log("information not found");
        }


    console.log("/n information updated /n");
    console.log(exists);
    
 }
 //below are code for displaying information
const display =() =>{
    console.log("/n displaying all item /n");
    console.log(booksDatabase);
}
 // code for removing information 
  
 const remove = (id) => {
    var exists ={};
    exists = booksDatabase.find(ele=>ele.id===id);

    var remainingInfo =[];
    remainingInfo = booksDatabase.filter(ele=>ele.id!==id);

    console.log("information removed");
    console.log(remainingInfo);

 }





 module.exports= {
    add,
    update,
    updateMany,
    display,
    remove

 }