



 function showComment() {
 	// creating variables for both userdata and addcomment (inputs in HTML) and assign their .values 
 var userdata = document.getElementById("userdata").value;
 var addComment = document.getElementById("addComment").value;


//here creating text Node for both userdata and addcomment and assign them to new vaiables
 var userText = document.createTextNode("Username: " + userdata);
 var comText = document.createTextNode("Comment: " + addComment);

 //creating new li 
 var newLi = document.createElement("li");
 //assigning new Li to the class name of list from HTML <ul> list 
 newLi.className = "list";



// every time user enters new text create new h2 
 var newuserText = document.createElement("H2");
 //append new user text to userText 
  newuserText.appendChild(userText);
//every time user comments create new h3
 var newcomText = document.createElement("h3");
 //append the h3 to comText
  newcomText.appendChild(comText);

 //append new LI to new user text 
  newLi.appendChild(newuserText).firstChild;
  //append new LI to new user comment
  newLi.appendChild(newcomText).firstChild;
 
 // AT last append new LI to id="list" from HTML <ul> list 
 document.getElementById("list").appendChild(newLi);
 

};